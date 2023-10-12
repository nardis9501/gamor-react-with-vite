import React, { useState } from "react";

export default function Dropdown(props) {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="inline-flex">
      {/* <a
        href="#"
        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
      >
        Option
      </a> */}

      <div className="relative">
        <svg
          onClick={() => setHidden(!hidden)}
          height="21"
          viewBox="0 0 21 21"
          width="21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m4.5 6.5h12" />
            <path d="m4.498 10.5h11.997" />
            <path d="m4.5 14.5h11.995" />
          </g>
        </svg>

        <div
          className={`absolute ${
            hidden ? "hidden" : ""
          } left-0 z-10 w-56  origin-top-right dark:bg-slate-600 dark:border-gray-700 bg-white border border-gray-100 rounded-md shadow-lg`}
        >
          <div className="p-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              Streams
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              Party
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              Premium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
