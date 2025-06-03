"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FloatingDock } from "./ui/FloatingDock";
import { TypewriterEffect } from "./ui/TypewriterEffect";
const Footer = () => {
  const socialMediaItems = socialMedia.map((info) => ({
    title: info.name || `Social ${info.id}`,
    icon: <img src={info.img} alt="social icon" width={20} height={20} />,
    href: info.url || "#",
  }));

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center text-xl md:text-2xl lg:text-4xl mb-4">
          Let’s turn your vision <span className="text-purple">into reality</span> 
        </h1>

        <TypewriterEffect
          words={[
            { text: "Reach" },
            { text: "out" },
            { text: "to" },
            { text: "me" },
            { text: "today" },
            { text: "and" },
            { text: "let's" },
            { text: "discuss" },
            { text: "how" },
            { text: "I" },
            { text: "can" },
            { text: "help" },
            { text: "you" },
            { text: "achieve", className: "text-purple" },
            { text: "your", className: "text-purple" },
            { text: "goals.", className: "text-purple" },
          ]}
          className="text-white-200 text-center text-lg md:text-xl lg:text-2xl mb-8"
          cursorClassName="bg-purple"
        />
        <a href="mailto:gwtcpro@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mario Casañas
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <FloatingDock
            items={socialMediaItems}
            desktopClassName="bg-black-200/75 backdrop-blur-lg border border-black-300"
            mobileClassName="bottom-0 right-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
