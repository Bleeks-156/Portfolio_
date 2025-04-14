import React from "react";
import AnimatedText from "./AnimatedText"; // Import the AnimatedText component

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-black font-medium">
      <div className="py-4 flex items-center justify-center container mx-auto">
        <AnimatedText
          text="© 2024. All Rights Reserved by Hari Shankar Babu M. Empowering Innovation and Excellence in Web Development."
          className="text-black text-base tracking-tight font-normal"
        />
      </div>
    </footer>
  );
};

export default Footer;
