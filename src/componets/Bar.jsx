import React, { useState } from "react";
import "../index.css";
import { Outlet, Link } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
const Bar = () => {
  let [hidden, sethidden] = useState("hidden");
  return (
    <>
      <nav className="flex  md:flex-row md:space-x-8   justify-between  w-full h-16 mt-3  text-purple-500  relative">
        <p className="font-bold font-serif ml-3 text-4xl align-middle mr-5">
          Deepanshu.dev
        </p>
        <ul className="hidden md:flex flex-row space-x-6 pr-10  mr-5 font-bold justify-center ">
          <Link to="/">
            <li className="hover:text-purple-400">HOME</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-purple-400">ABOUT</li>
          </Link>
          <Link to="/project">
            <li className="hover:text-purple-400">PROJECT</li>
          </Link>
        </ul>
        <div className="md:hidden pr-10">
          <button
            onClick={() => {
              if (hidden === "") sethidden("hidden");
              else sethidden("");
            }}
          >
            <GrMenu />
          </button>
        </div>
      </nav>
      <ul
        className={`flex ml-3  flex-col mr-16 font-bold justify-center  text-purple-500 ${hidden} md:hidden`}
      >
        <Link to="/">
          <li
            className="hover:text-purple-400"
            onClick={() => {
              sethidden("hidden");
            }}
          >
            HOME
          </li>
        </Link>
        <Link to="/about">
          <li
            className="hover:text-purple-400"
            onClick={() => {
              sethidden("hidden");
            }}
          >
            ABOUT
          </li>
        </Link>
        <Link
          to="/project"
          onClick={() => {
            sethidden("hidden");
          }}
        >
          <li className="hover:text-purple-400">PROJECT</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
};

export default Bar;
