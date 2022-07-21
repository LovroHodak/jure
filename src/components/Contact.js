import React, { forwardRef } from "react";
import { tw } from "../tailwind";
import pubImg from "../pub-quiz-cover.png";
import { Widget } from "@typeform/embed-react";

export default forwardRef(function Contact(_, ref) {
  return (
    <ContactCont ref={ref}>
      <Title>Kontakt</Title>
      <div className="flex">
        {/* <div className="w-full bg-white">
          <div className="p-6 border border-gray-300">
            <form method="POST" action="https://herotofu.com/start">
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-black
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-gray-400
          "
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <Widget id="ckaRnJMj" className="h-[400px]" />
        <div className="bg-black w-1/2 md:flex items-center hidden border-2 border-white">
          <img src={pubImg} />
        </div>
      </div>
    </ContactCont>
  );
});

const ContactCont = tw.div`
bg-black w-full p-10 md:p-20
`;

const Title = tw.h1`
text-4xl font-bold mb-16 text-center text-white`;
