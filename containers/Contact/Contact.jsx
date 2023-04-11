"use client";

import { Title } from "@/components";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-10 mb-32 max-w-[750px] mx-auto px-7"
    >
      {/* title */}
      <Title
        title={"keep in touch"}
        phrase={"Setibulum rutrum quam vitae fringilla tincidunt"}
      />

      {/* form */}
      <form className="flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <input type="text" placeholder="Enter your first name" />
          <input type="text" placeholder="Enter your last name" />
        </div>
        <input type="email" placeholder="Enter your email address" />
        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
        <div className="flex justify-center">
          <input
            type="button"
            value="SEND MESSAGE"
            className="border-blue-500 bg-blue-500 hover:border-gray-800 hover:bg-gray-800 text-white px-7 text-[1rem] font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
