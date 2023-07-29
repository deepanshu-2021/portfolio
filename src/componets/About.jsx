import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-3/6 mx-auto mt-32 md:pl-40">
        <div className="mr-4">
          <img
            src="/images/workspace.jpg"
            className="w-72 h-80 border rounded-md lg:w-64 lg:h-72"
          ></img>
        </div>
        <div className="flex flex-col w-72 space-y-2 mr-4">
          <p className="font-bold text-3xl mb-1 text-purple-500">ABOUT</p>
          <p className="text-sm w-48 text-gray-500 md:w-60">
            I love turning design concepts into interactive and user-friendly
            experiences. My journey in the world of web development has been an
            exciting one, and every day, I strive to expand my knowledge and
            skills to stay ahead in this rapidly evolving field.
          </p>
          <Link to="/project">
            <button className="ml-0 nextbtn">Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
