import React from "react";
import { useParams } from "react-router-dom";
import datas from "../data/data";

const Test = () => {
  const href = useParams();
  let project;
  datas.map((data) => (data.ref === href.ref ? (project = data) : ""));

  return (
    <div className="justify-between items-center max-w-[1000px] m-auto relative pt-[30px] w-full pb-10 bg-white px-5 lg:px-0">
      <div className="overflow-hidden drop-shadow-sm">
        <h3 className="text-center font-bold text-4xl my-5">A</h3>
        <img className="h-39 w-full object-cover" src="" alt="" />
        <div className="p-8">
          <h3 className="font-bold text-2xl my-1">A</h3>
          <p className="text-gray-600 text-xl">A</p>
        </div>
        <div>
          <h1 className="p-5 items-center justify-center text-center text-2xl">
            Company: GreyLogix Brasil
          </h1>

          <div>
            <h1 className="text-xl">Technologies:</h1>
            <ul className="list-item list-disc pl-10 my-5">
              <li>Python</li>
              <li>Deep Learning</li>
              <li>Transfer Learning</li>
              <li>MATLAB</li>
              <li>Keras</li>
              <li>Imageai</li>
              <li>Opencv</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="pt-5">
              I've recently developed a PoC for a big O&amp;G company in order
              to address a common issue in offshore oil rigs.
            </p>
            <p className="mb-5 mt-5">
              Gas flares are equipment that burn natural gas when a processing
              unit is not capable of processing all the gas coming from a well.
              Methane and other gases present in natural gas is a lot worse than
              CO2 in terms of greenhouse effects. So the gas must be burned in
              order to convert it to CO2.
            </p>
            <p className="mb-5">
              Monitoring of flares in offshore oil rigs is done by having a
              person periodically check whether the flare is lit or not. This is
              unacceptable in a context where companies must have control of
              their greenhouse gases emissions.
            </p>
            <p>
              So we made a vision system based on neural networks and a camera
              that would check it 24/7. In this first PoC, the system only
              checks whether the flare is on or off and estimates gas emissions
              based on that. In the future, the vision system should be able to
              assess flame quality (e.g. whether there is smoke or not, or
              estimates of how much of the gas is actually being burned), and
              take that into account in emission reports.
            </p>
          </div>

          <div className="flex-col justify-center items-center pt-5">
            <figure>
              <img src="" alt="" />
              <figcaption className="text-center text-sm pt-5">
                Main interface
              </figcaption>
            </figure>
          </div>
          <div className="flex justify-center items-center">
            <figure className="pb-5">
              <img src="" alt="" />
              <figcaption className="text-center text-sm pt-5 pb-5">
                System overview
              </figcaption>
            </figure>
          </div>
          <div className="flex justify-center items-center">
            <figure className="pb-5">
              <img src="" alt="" />
              <figcaption className="text-center text-sm pt-5 pb-5">
              Vision system working on a video
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
