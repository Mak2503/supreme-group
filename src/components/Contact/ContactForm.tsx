"use client";
import React from "react";
import Input from "./Input";

const ContactForm = () => {
  return (
    <div className="w-1/2">
      <form className="flex flex-col gap-4">
        <Input type="text" placeholder="Full name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Company" />
        <textarea
          className="py-2.5 text-lg bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-white placeholder:text-white"
          placeholder="Message"
        />
        <button
          type="submit"
          className="w-max px-10 py-2.5 font-semibold bg-transparent border border-white rounded-full transition hover:bg-white hover:text-black"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
