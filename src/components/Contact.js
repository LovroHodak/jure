import React, { forwardRef } from "react";
import { tw } from "../tailwind";
import pubImg from "../pub-quiz-cover.png";

export default forwardRef(function Contact(_, ref) {
  return (
    <ContactCont ref={ref}>
      <Title>Kontakt</Title>
      <div className="flex">
        <div class="w-full bg-white">
          <div class="p-6 border border-gray-300">
            <form method="POST" action="https://herotofu.com/start">
              <label class="block mb-6">
                <span class="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="
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
              <label class="block mb-6">
                <span class="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
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
              <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  class="
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
              <div class="mb-6">
                <button
                  type="submit"
                  class="
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
        </div>

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
text-4xl font-bold mb-10 text-center text-white`;
