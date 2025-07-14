export const MainComponent = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight opacity-0 animate-fade-in-delay-1 space-x-2">
            <span className="">Hi There,</span>
            <span className="text-primary">My name is Michael</span>
            <p className="text-2xl mt-4 font-serif font-light">A FullStack Developer who builds amazing functional web applications using react, typescript, and tailwindcss for frontend as well as NodeJs for Backend</p>
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
