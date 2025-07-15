import { useEffect, useState } from "react";
import { cn } from "../Lib/Utils";
import { TiThMenu } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-xs" : "py-6"
      }`}
    >
      <div className="container flex items-center justify-around gap-50">
        <a href="" className="font-bold text-xl text-primary flex items-center">
          <div className="relative z-10 flex items-center gap-2">
            <h1 className="font-bold text-glow text-foreground text-3xl">
              T.O.M
              </h1>
               <span className="text-primary">Portfolio</span>
            </div>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transitions-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* desktop nav */}

        {/* Mobile Nav */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="visible md:hidden mb-1 z-50 p-2 text-6xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <RiArrowDropDownLine className="text-3xl text-black" />
          ) : (
            <TiThMenu className="text-3xl text-black" />
          )}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transitions-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {/* Mobile Nav */}
      </div>
    </nav>
  );
};
