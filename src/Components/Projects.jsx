import React, { useState } from "react";
import Proj1 from "../Assets/project-1.jpg";
import Proj2 from "../Assets/project-2.png";
import Proj3 from "../Assets/project-3.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";

function Projects() {
  const carouselProjects = [
    {
      key: "1",
      img: `${Proj1}`,
      name: "Experimental Bench Automation and Computer Vision Algorithm",
      demo: "https://bkiyoshi.in/?project=experimental-bench-automation-computer-vision-algorithm",
    },
    {
      key: "2",
      img: `${Proj2}`,
      name: "Flare monitor PoC",
      demo: "https://bkiyoshi.in/?project=flare-monitor-poc",
    },
    {
      key: "3",
      img: `${Proj3}`,
      name: "Stock price prediction LSTM",
      demo: "https://bkiyoshi.in/?project=stock-price-prediction-lstm",
    },
    {
      key: "4",
      img: `${Proj3}`,
      name: "Stock price prediction LSTM",
      demo: "https://bkiyoshi.in/?project=stock-price-prediction-lstm",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <div
      id="projects"
      className="flex justify-center flex-col max-w-[1160px] m-auto relative min-h-[400px] sm:mt-[200px] mt-[300px] md:mt-0"
    >
      <div>
        <p className="flex justify-center font-[600] text-gray-600">Latest</p>
        <h1 className="flex justify-center text-[3rem] font-[600] mb-10">
          Projects
        </h1>
        <div className="m-auto items-center">
          <div className="mt-[1rem]">
            <Slider {...settings}>
              {carouselProjects.map((d) => (
                <div
                  key={d.key}
                  className="ml-10 sm:ml-5 min-h-[300px] inline-block max-h-[450px] min-w-[240px] max-w-[300px] bg-white "
                >
                  <div className="flex flex-col md:mr-1 lg:mr-2 border-solid border-[0.1rem] border-gray-500 rounded-[32px] rounded-t-[30px]">
                    <div className="flex items-start min-h-[230px] border-b-[0.1rem] ">
                      <img
                        src={d.img}
                        alt="project"
                        className="h-[100%] w-[100%] rounded-t-[31px] pt-1"
                      />
                    </div>
                    <div className="flex flex-col min-h-[150px] bg-[#fafafa] bottom-0 rounded-b-[32px]">
                      <h2 className="font-[600] text-black text-[0.9rem] justify-center text-center my-4">
                        {d.name}
                      </h2>
                      <div className="flex content-center justify-center items-center gap-1 mb-2">
                        {d.github ? (
                          <a
                            href={d.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="font-[600] text-[0.8rem] ease-in duration-300 p-[0.8rem] w-[7rem] rounded-[32px] border-solid border-[0.1rem] border-[#353535] hover:cursor-pointer hover:bg-[#353535] hover:text-white bg-[#FFF]">
                              Github
                            </button>
                          </a>
                        ) : (
                          <></>
                        )}
                        <button
                          className="font-[600] text-[0.8rem] ease-in duration-300 p-[0.8rem] w-[7rem] rounded-[32px] border-solid border-[0.1rem] border-[#353535] hover:cursor-pointer hover:bg-[#353535] hover:text-white bg-[#FFF]"
                          onClick={() => setShowModal(true)}
                        >
                          Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
}

export default Projects;
