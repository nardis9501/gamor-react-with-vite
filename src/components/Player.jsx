import React from "react";

export default function Player({ username, avatarUrl }) {
  return (
    <>
      <li className="grid grid-cols-3 place-items-center">
        {username}
        <img
          className="w-15 h-15 bg-white rounded-full"
          src={`${avatarUrl}`}
          alt="foto"
          width={20}
          height={20}
        />
        <button className=" grid w-6  place-content-center bg-transparent">
          <svg
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
              <path d="m5.5 10.5h10" />
              <path d="m10.5 5.5v10" />
            </g>
          </svg>
        </button>
      </li>
    </>
  );
}
