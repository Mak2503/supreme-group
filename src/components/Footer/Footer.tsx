import React from "react";
import Logo from "../Logo";
// import Image from "next/image";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="py-20 px-56 bg-white bg-footer bg-no-repeat bg-cover bg-right-bottom text-black">
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
