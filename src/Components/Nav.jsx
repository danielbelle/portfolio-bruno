import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const location = useLocation().pathname;
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    navigate("/");
    scroller.scrollTo(selector, {
      duration: 200,
      smooth: true,
      spy: true,
    });
  };

  return (
    <header
      className="flex justify-between items-center h-24 max-w-[1160px] mx-auto px-4 text-black"
      id="nav"
    >
      <h1 className="w-full lg:text-4xl sm:text-2xl text-1xl text-black m-12 mt-15 p-4 pt-6 text-nowrap">
        Bruno Kiyoshi Ynumaru
      </h1>
      <ul className="hidden md:flex mt-4 lg:text-2xl text-md  text-nowrap md:mr-5 m-auto ">
        {location === "/" ? (
          <>
            {" "}
            <li className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                About
              </ScrollLink>
            </li>
            <li className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                Contact
              </ScrollLink>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li
              className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer"
              onClick={() => goToPageAndScroll("nav")}
            >
              Home
            </li>
            <li className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
              <RouterLink to="/projects">All Projects</RouterLink>
            </li>
            <li
              className="p-4 mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer"
              onClick={() => goToPageAndScroll("contact")}
            >
              Contact
            </li>
          </>
        )}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#fafafa] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl text-black text-nowrap m-4">
          Bruno Ynumaru
        </h1>
        {location === "/" ? (
          <>
            {" "}
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <li
                onClick={handleNav}
                className="p-4 border-b border-gray-300 cursor-pointer"
              >
                About
              </li>
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <li
                onClick={handleNav}
                className="p-4 border-b border-gray-300 cursor-pointer"
              >
                Projects
              </li>
            </ScrollLink>
            <ScrollLink
              onClick={handleNav}
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <li className="p-4 border-b border-gray-300 cursor-pointer">
                Contact
              </li>
            </ScrollLink>
          </>
        ) : (
          <>
            {" "}
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <li
                onClick={handleNav}
                className="p-4 border-b border-gray-300 cursor-pointer"
              >
                Home
              </li>
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <li
                onClick={handleNav}
                className="p-4 border-b border-gray-300 cursor-pointer"
              >
                All Projects
              </li>
            </ScrollLink>
            <ScrollLink
              onClick={handleNav}
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <li className="p-4 border-b border-gray-300 cursor-pointer">
                Contact
              </li>
            </ScrollLink>
          </>
        )}
      </ul>
    </header>
  );
}

export default Nav;
