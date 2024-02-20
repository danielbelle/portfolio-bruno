import React from "react";
import Experience from "../Assets/experience.png";
import Education from "../Assets/education.png";

function About() {
  return (
    <div
      id="about"
      className="justify-between items-center max-w-[1160px] m-auto relative min-h-[1060px] sm:min-h-[750px] h-[80vh] pt-[30px] pb-[50px]"
    >
      <p className="flex justify-center font-[600] text-gray-600">
        Find out more
      </p>
      <h1 className="flex text-[3rem] font-[800] mb-2 justify-center ">
        About me
      </h1>
      <div className="about-container">
        <div className="about-details-container mx-10">
          <div className="text-gray-600">
            <p className="text-justify m-[20px] md:text-2xl">
              Passionate about harnessing the power of data to drive business
              growth, I am a data scientist based in Rio de Janeiro, Brazil.
            </p>
            <p className="text-justify m-[20px] md:text-2xl">
              With a knack for solving complex problems, I specialize in
              transforming raw data into valuable insights that fuel strategic
              decision-making and into solutions that make people's jobs easier.
            </p>
          </div>
          <div className="flex justify-between md:gap-[1.5rem] mb-[2rem] mt-[2rem] gap-2">
            <div className="md:contents col-span-2 text-center w-[300px]">
              <div className="p-[1rem] flex-1 bg-white rounded-[32px] mb-5 md:h-[180px] h-[160px] lg:h-[200px] border-solid border-[0.1rem] border-[#a3a3a3]">
                <img
                  src={Experience}
                  alt="experience icon"
                  className="h-[2rem] mx-auto my-2"
                />
                <h3 className="font-bold">Duarte's Digital Soluctions</h3>
                <p className="text-gray-600 lg:text-[1rem] text-[0.8rem]">
                  1+ anos <br />
                  Web Developer
                </p>
              </div>
              <div className="p-[1rem] flex-1 bg-white rounded-[32px] border-solid lg:h-[200px] md:h-[180px] h-[160px] border-[0.1rem] border-[#a3a3a3] max-w-[350px]">
                <img
                  src={Experience}
                  alt="experience icon"
                  className="h-[2rem] mx-auto my-2"
                />
                <h3 className="font-bold">Pieta.tech</h3>
                <p className="text-gray-600 lg:text-[1rem] text-[0.8rem]">
                  1+ anos <br />
                  Front-end ReactJS
                </p>
              </div>
            </div>
            <div className="md:contents col-span-2 text-center w-[300px]">
              <div className="p-[1rem] flex-1 bg-white rounded-[32px] mb-5 lg:h-[200px] md:h-[180px] h-[160px] border-solid border-[0.1rem] border-[#a3a3a3] m-auto">
                <img
                  src={Experience}
                  alt="experience icon"
                  className="h-[2rem] mx-auto my-2"
                />
                <h3 className="font-bold">ControlWare</h3>
                <p className="text-gray-600 lg:text-[1rem] text-[0.8rem]">
                  1+ anos <br />
                  Full Stack PHP e JS
                </p>
              </div>
              <div className="p-[1rem] flex-1 bg-white rounded-[32px] lg:h-[200px] md:h-[180px] h-[160px] border-solid border-[0.1rem] border-[#a3a3a3]">
                <img
                  src={Education}
                  alt="graduation icon"
                  className="h-[2rem] mx-auto my-2"
                />
                <h3 className="font-bold">Engenharia Elétrica</h3>
                <p className="text-gray-600 lg:text-[1rem] text-[0.8rem]">
                  Universidade Federal de Santa Catarina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
