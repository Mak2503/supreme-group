import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="py-20 px-56 bg-white relative text-black">
      {/* Footer Background */}
      <Image
        className="absolute bottom-0 right-0"
        src="footer-bg.svg"
        alt="footer-bg"
        width={300}
        height={300}
      />
      <Logo />
      <FooterLinks />
      {/* Copyrights & Address */}
      <div className="mt-20 flex justify-between items-center text-sm">
        <p>©2025. All Rights Reserved.</p>
        <p>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
      </div>
    </footer>
  );
};

export default Footer;
