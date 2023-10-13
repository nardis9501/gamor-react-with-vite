import React from "react";

export default function Player({ userId, username, avatarUrl, onClick }) {
  const handlerClick = () => {
    onClick(username);
  };
  return (
    <>
      <li className="grid grid-cols-4  my-2 items-center place-content-center">
        <span className="flex place-content-center">{userId}</span>
        <span className="flex ">{username}</span>
        <span className="flex place-content-center">
          <img
            className=" w-15 h-15 bg-white rounded-full"
            src={`${avatarUrl}`}
            alt="foto"
            width={20}
            height={20}
          />
        </span>
        <span className="flex place-content-center">
          <svg
            onClick={handlerClick}
            className="cursor-pointer"
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
        </span>
      </li>
    </>
  );
}
