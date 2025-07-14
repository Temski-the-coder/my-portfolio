import emailjs from '@emailjs/browser';
import { SiGmail } from "react-icons/si";
import {
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { cn } from "../Lib/Utils";
import { BsFillSendFill } from "react-icons/bs";
import { useToast } from "../hooks/use-toasts";
import { useRef, useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)

         setTimeout(() => {
             toast({
                title: "Message Sent!",
                description: "Thank you for reaching out, i'll get back to you very soon"
             });
             setIsSubmitting(false);
         }, 1500);

         emailjs.sendForm(
            'service_n163bpn',
            'template_qyqpzy2',
            form.current!,
            'Giwir94S-ALfMoe0M'
         )
         .then(
        () => {
          setIsSubmitting(false);
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setIsSubmitting(false);
        }
      );
    }


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-purple-900">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          i'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-center justify-center">
          <div className="space-y-8 h-full ">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start justify-center space-x-4 mt-15">
                <div className="p-3 rounded-full bg-purple-700/10 mt-1">
                  <SiGmail className="text-purple-700" />
                </div>
                <div className="mr-7">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:timmytems680@gmail.com"
                    className="text-muted-foreground hover:text-purple-800 transition-colors"
                  >
                    timmytems680@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-center space-x-10 mt-15">
                <div className="p-3 rounded-full bg-purple-700/10 flex mt-1 justify-start">
                  <FaPhoneVolume className="text-purple-700" />
                </div>
                <div className="mr-15">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+2349024863242"
                    className="text-muted-foreground hover:text-purple-800 transition-colors"
                  >
                    +234-902-486-3242
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect with Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="#" target="_blank">
                    <FaLinkedin className="w-6 h-6 hover:text-primary"/>
                  </a>

                  <a href="#" target="_blank">
                    <FaInstagram className="w-6 h-6 hover:text-primary"/>
                  </a>

                  <a href="#" target="_blank">
                    <FaSquareXTwitter className="w-6 h-6 hover:text-primary"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={form} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-800"
                  placeholder="Clark Kent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-800"
                  placeholder="Clarkkent@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-800"
                  placeholder="How can i be of service?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button bg-purple-900 w-full flex items-center justify-center gap-2"

                )}
              >
                {isSubmitting ? "sending..." : "Send Message"}
                <BsFillSendFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
