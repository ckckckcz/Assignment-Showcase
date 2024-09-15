import React from "react";
import { userData } from "../data/dataUser";

const Right = () => {
  return (
    <div className="grid mb-8 border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      {userData.map((user, index) => (
        <figure key={user.id} className={`flex flex-col items-left justify-left p-6 text-left bg-white border-b border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 `}>
          <blockquote className="mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.quote.title}</h3>
          </blockquote>
          <figcaption className="flex items-center justify-left">
            <img className="rounded-full w-9 h-9" src={user.author.imgSrc} alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>{user.author.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{user.author.role}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Right;
