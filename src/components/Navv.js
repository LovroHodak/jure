import React, { useState, useEffect } from "react";

export default function Navv({ introRef, productsRef, contactRef }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  /* useEffect(() => {
    console.log(introRef);
    console.log(introRef.current);
    console.log(introRef.current.offsetTop);
  }, []); */
  return (
    <div className="px-10 md:px-20">
      <nav className="bg-transparent mb-8 border-gray-200 pt-8 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <span className="self-center text-white text-4xl font-semibold whitespace-nowrap dark:text-white">
            PubQuiz.si
          </span>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={toggleMenu}
            onClick={() =>
              toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
            }
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {/* dropdown */}
          <div
            className={`${
              toggleMenu ? "" : "hidden"
            } w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul className="top-40 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-xl md:font-medium">
              <li
                onClick={() => {
                  introRef.current.scrollIntoView({ behavior: "smooth" });
                  setToggleMenu(false);
                }}
              >
                <a className="cursor-pointer text-2xl block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 only:md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  O nas
                </a>
              </li>
              <li
                onClick={() => {
                  productsRef.current.scrollIntoView({ behavior: "smooth" });
                  setToggleMenu(false);
                }}
              >
                <a className="cursor-pointer text-2xl block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 only:md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Dogodki
                </a>
              </li>
              <li
                onClick={() => {
                  contactRef.current.scrollIntoView({ behavior: "smooth" });
                  setToggleMenu(false);
                }}
              >
                <a className="cursor-pointer text-2xl block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 only:md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
