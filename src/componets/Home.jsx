import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row w-3/6 mx-auto mt-32 md:pl-40">
      <div className="mr-4">
        <img
          src="../public/images/profilepic.jpg"
          className="w-72 h-80 border rounded-xl  "
        ></img>
      </div>
      <div className="flex flex-col w-72 space-y-2">
        <p className="font-bold text-3xl text-purple-500 ">
          FRONT-END
          <br /> REACT DEVELOPER
        </p>
        <p className="text-sm w-48 text-gray-500 md:w-60">
          Hey there! I'm Deepanshu baluni, a passionate and creative Frontend
          Developer, and I'm thrilled to have you visit my corner of the
          internet.
          <div className="flex flex-row space-x-3 mt-3">
            <a
              href="https://www.linkedin.com/in/deepanshu-baluni-82b40b239/"
              target="_blank"
            >
              <button className="Btn">
                <img src="../public/images/linkedin.svg" />
              </button>
            </a>
            <a href="https://github.com/deepanshu-2021" target="_blank">
              <button className="Btn">
                <img src="../public/images/github.svg" className="img" />
              </button>
            </a>
          </div>
        </p>
        <Link to="/about">
          <button className="ml-0 nextbtn">About</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
