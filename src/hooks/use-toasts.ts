import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

interface Toast {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  [key: string]: unknown;
}

interface ToastState {
  toasts: Toast[];
}

interface AddToastAction {
  type: "ADD_TOAST";
  toast: Toast;
}

interface UpdateToastAction {
  type: "UPDATE_TOAST";
  toast: Partial<Toast> & { id: string };
}

interface DismissToastAction {
  type: "DISMISS_TOAST";
  toastId?: string;
}

interface RemoveToastAction {
  type: "REMOVE_TOAST";
  toastId?: string;
}

type ToastAction =
  | AddToastAction
  | UpdateToastAction
  | DismissToastAction
  | RemoveToastAction;

type Listener = (state: ToastState) => void;

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const reducer = (state: { toasts: any; }, action: { type?: any; toastId?: any; toast?: any; }) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t: { id: any; }) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast: { id: string; }) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t: { id: any; }) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t: { id: any; }) => t.id !== action.toastId),
      };
    default:
      return state;
  }
};

const listeners: { (value: React.SetStateAction<{ toasts: never[]; }>): void; (value: React.SetStateAction<{ toasts: never[]; }>): void; }[] = [];

let memoryState = { toasts: [] };

function dispatch(action: { type: string; toastId?: unknown; toast?: any; }) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

function toast(props: Record<string, any>) {
  const id = genId();

  const update = (updateProps: Record<string, any>) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...updateProps, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId: unknown) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };