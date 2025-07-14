import { FaArrowAltCircleUp } from "react-icons/fa";

export const Footer = () => {
return  (
        <footer className="py-7 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center">
            {""}
            <p className="text-2xl text-muted-foreground flex items-center justify-center">
            {""}
            © {new Date().getFullYear()} T.O.M-Codes. All Right Reserved.
            </p>

            <a href="#hero" className="absolute bottom-35 md:bottom-30 right-15 md:right-10 flex gap-3 text-foreground bg-blue-950 .dark:bg-purple-950 px-2 py-3 rounded-full">
    <FaArrowAltCircleUp className="w-6 h-6"/> Back to Top
  </a>
        </footer>
    )
}