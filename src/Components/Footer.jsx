import React, { useState, useEffect } from "react";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  const location = useLocation().pathname;
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 200,
      smooth: true,
      offset: 0,
      spy: true,
    });
  };

  return (
    <footer
      id="footer"
      className="flex justify-between items-center max-w-[1160px] relative min-h-[26vh] m-auto pt-[5rem] mb-[5rem] flex-col"
    >
      <ul className="flex mt-4 lg:text-2xl md:text-lg text-[0.78rem] text-nowrap m-auto items-center justify-center ">
        {location === "/" ? (
          <>
            {" "}
            <li className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
              <ScrollLink
                to="nav"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                Home
              </ScrollLink>
            </li>
            <li className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
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
            <li className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
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
          </>
        ) : (
          <>
            {" "}
            <li
              className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer"
              onClick={() => goToPageAndScroll("nav")}
            >
              Home
            </li>
            <li className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer">
            <RouterLink to="/projects">All Projects</RouterLink>
            </li>
            <li
              className="sm:p-4 p-2 sm:mr-3 hover:underline hover:text-[#b5b5b5] hover:underline-offset-[1rem] cursor-pointer"
              onClick={() => goToPageAndScroll("contact")}
            >
              Contact
            </li>
          </>
        )}
      </ul>
      <div className="flex items-center text-center justify-center text-[#656565] mt-2 mx-4 text-[8px] sm:text-[14px] text-xs">
        <p>
          Copyright &#169; {date} Bruno Kiyoshi Ynumaru. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
