import React from "react";
import ProfilePic from "../Assets/profile-pic.png";
import LinkedIn from "../Assets/linkedin.png";
import GitHub from "../Assets/github.png";
import Resume from "../Assets/resume-danielbelle-full-stack.pdf.pdf";
import { Link } from "react-scroll";

function Profile() {
  return (
    <div
      id="profile"
      className="flex justify-between items-center max-w-[1160px] mx-auto my-[1rem] px-4 relative gap-[4rem] min-h-[400px] h-[80vh] pt-2"
    >
      <div className="md:flex lg:h-[400px] lg:w-[400px] md:h-[320px] md:w-[320px] mx-0 my-auto flex-[0.9] hidden">
        <img src={ProfilePic} alt="Profile" />
      </div>
      <div className="flex justify-between flex-col flex-1 content-center self-center mx-0 my-auto">
        <p className="font-bold text-center text-gray-600">Hello, I'm</p>
        <h1 className="font-bold text-5xl py-4 text-center">
          Bruno Kiyoshi Ynumaru
        </h1>
        <p className="text-2xl font-bold text-center text-gray-600 py-3">
          Data Scientist
        </p>
        <div className="flex justify-center gap-[1rem]">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="font-[600] text-[0.8rem] ease-in duration-300 p-[0.8rem] w-[8rem] rounded-[32px] border-solid border-[0.1rem] border-[#353535] hover:cursor-pointer hover:bg-[#353535] hover:text-white bg-[#FFF]">
              Resume
            </button>
          </a>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={300}>
            <button className="font-[600] text-white ease-in duration-300 p-[0.8rem] w-[8rem] text-[0.8rem]  rounded-[32px] border-solid border-[0.1rem] border-[#353535] hover:cursor-pointer hover:bg-black hover:text-white bg-[#353535]">
              Contact
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-[1rem] gap-[1rem]">
          <a
            href="https://www.linkedin.com/in/bkiyoshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn profile"
              className="cursor-pointer h-[2rem]"
            />
          </a>
          <a
            href="https://github.com/brunokiyoshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHub}
              alt="GitHub Profile"
              className="cursor-pointer h-[2rem]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
