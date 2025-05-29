import Image from "next/image";
import React from "react";

const NavButtons = () => {
  return (
    <div className="flex items-center space-x-8">
      <button className="px-5 py-2.5 bg-[#5CD6FF] border border-[#00BFFF] text-black rounded-full cursor-pointer">
        <a href="#contact">Contact Us</a>
      </button>
      <button className="cursor-pointer">
        <a
          href="https://www.linkedin.com/company/supreme-group-company"
          target="_blank"
        >
          <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
        </a>
      </button>
      <button className="flex gap-2 items-center text-black text-xs cursor-pointer">
        <Image src="/translate.svg" alt="translate" width={24} height={24} />
        ENG
      </button>
    </div>
  );
};

export default NavButtons;
