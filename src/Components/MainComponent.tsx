import { Typewriter } from 'react-simple-typewriter';


export const MainComponent = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-5">
        <div className="space-y-6 md:space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1 space-x-2">
            <span className="text-foreground"><Typewriter words={['Hi There,']} loop={1} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500}/> </span>
            <span className="text-primary"><Typewriter words={['My name is Temenu Michael']} loop={1} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500}/></span>
            <p className="text-base md:text-2xl mt-4 font-serif font-light text-foreground">A FullStack Developer who builds amazing functional web applications using react, typescript, and tailwindcss for frontend as well as NodeJs for Backend</p>
          </h1>
        </div>
        <p className="text-3xl md:text-4xl absolute bottom-1 flex flex-col left-1/2 transform -translate-x-1/2 items-center opacity-0 animate-fade-in-delay-2">
          Welcome to my portfolio
          <a
            href="#main"
            className="mt-4 text-blue-600 hover:text-blue-800 transition duration-300 animate-bounce left-1/2 transform -translate-x-1/2  rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
              id="hero"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
};
