
import Proj0 from "../Assets/project-0.jpg";
import Proj1 from "../Assets/project-1.png";
import Proj2 from "../Assets/project-2.webp";
import Proj3 from "../Assets/project-3.jpg";
import Proj4 from "../Assets/project-4.jpg";
import Proj5 from "../Assets/project-5.png";
import Proj6 from "../Assets/project-6.jpg";
import Proj7 from "../Assets/project-7.jpg";

import Proj0d1 from "../Assets/project-0.1.jpg";
import Proj0d2 from "../Assets/project-0.2.jpg";
import Proj0d3 from "../Assets/project-0.3.jpg";
import Proj0d4 from "../Assets/project-0.4.jpg";

import Proj1d1 from "../Assets/project-1.1.png";
import Proj1d2 from "../Assets/project-1.2.png";
import Proj1d3 from "../Assets/project-1.3.png";
import Proj1d4 from "../Assets/project-1.4.png";

import Proj3d1 from "../Assets/project-3.1.jpg";
import Proj3d2 from "../Assets/project-3.2.jpg";

import Proj4d1 from "../Assets/project-4.1.jpg";

import Proj5d1 from "../Assets/project-5.1.png";
import Proj5d2 from "../Assets/project-5.2.jpg";
import Proj5d3 from "../Assets/project-5.3.jpg";
import Proj5d4 from "../Assets/project-5.4.jpg";
import Proj5d6 from "../Assets/project-5.5.jpg";

import Proj6d1 from "../Assets/project-6.1.jpg";
import Proj6d2 from "../Assets/project-6.2.jpg";
import Proj6d3 from "../Assets/project-6.3.jpg";

import Proj7d1 from "../Assets/project-7.1.jpg";
import Proj7d2 from "../Assets/project-7.2.jpg";


const data = [
  {
    key: "0",
    ref: "experimental-bench-automation-and-computer-vision-algorithm",
    img: `${Proj0}`,
    name: "Experimental Bench Automation and Computer Vision Algorithm",
    demo: "https://bkiyoshi.in/?project=experimental-bench-automation-computer-vision-algorithm",
    txt: `<div>
    <h1 className="p-5 items-center justify-center text-center text-2xl">
      Company: SINMEC (UFSC)
    </h1>

    <div>
      <h1 className="text-xl">Technologies:</h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>Python</li>
        <li>Computer vision</li>
        <li>Arduino</li>
        <li>LabVIEW</li>
        <li>git</li>
        <li>MATLAB</li>
      </ul>
    </div>

    <div className="mb-5">
      <p>
        At the lab I worked in during college we had this really cool
        experimental bench with water pumps, valves, an air diffuser, flow
        meters, cameras and LASERS:
      </p>
    </div>

    <div className="flex justify-center items-center">
      <figure>
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205538-e1665447625713.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Schematic of the experimental bench
        </figcaption>
      </figure>
    </div>
    <div className="mb-5">
      <p className="mb-5">
        My work was to automate it! So the guys teached me Python, LabVIEW
        and Arduino! And this was also my first time learning about git!
      </p>
      <p className="mb-5 font-bold">I. LOVED. IT.</p>
      <p className="mb-5">
        After the bench was automated, then the work was to help develop a
        computer vision algorithm to measure flows by image. This was done
        in MATLAB and Python, mostly using the CV-2 package.
      </p>
    </div>

    <div>
      <h5 className="text-xl mt-8 mb-3">Check some images:</h5>
      <div className="flex justify-center items-center">
        <figure className="pb-5">
          <img 
            src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205156-e1665447679311.jpg"
            alt=""
          />
          <figcaption className="text-center text-sm mb-5">
            Image processing steps in bubble identification procedure
          </figcaption>
        </figure>
      </div>

      <div className="flex justify-center items-center">
        <figure className="pb-5">
          <img 
            src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205330.jpg"
            alt=""
          />
          <figcaption className="text-center text-sm mb-5">
            Velocity vectors drawn over some bubbles
          </figcaption>
        </figure>
      </div>

      <div className="flex justify-center items-center"></div>
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205453.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Velocity vectors drawn over image, but for liquid phase
        </figcaption>
      </figure>
    </div>

    <div >
      <p className="mt-5">
        Honestly, with the explosion of neural networks in the last few
        years, our parametric approach to image segmentation is probably
        waaay outdated. But it was an amazing experience nonetheless!
      </p>
      <p className="mb-5 mt-5">
        If you'd like more detail, you can check our article in the link
        below:
      </p>
      <a
        className="cursor-pointer text-black"
        href="https://www.sciencedirect.com/science/article/pii/S0009250918303269"
      >
        https://www.sciencedirect.com/science/article/pii/S0009250918303269
      </a>
      <p className="font-bold mt-5">
        Absolutely do NOT use 
        <a
          className="cursor-pointer underline"
          href="https://www.sci-hub.se/"
        >
          sci-hub 
        </a>
        to get access to it!
      </p>
    </div>
  </div>`

  },
  {
    key: "1",
    ref: "flare-monitor-poc",
    img: `${Proj1}`,
    name: "Flare monitor PoC",
    demo: "https://bkiyoshi.in/?project=flare-monitor-poc",
    txt: `<div >
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
        person periodicaly check whether the flare is lit or not. This is
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
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/main-interface.png"
          alt=""
        />
        <figcaption className="text-center text-sm pt-5">
          Main interface
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center"></div>
    <figure className="pb-5">
      <img
        
        src="http://bkiyoshi.in/wp-content/uploads/2022/10/sysoverview.png"
        alt=""
      />
      <figcaption className="text-center text-sm pt-5 pb-5">
        System overview
      </figcaption>
    </figure>
  </div>`
  },
  {
    key: "2",
    ref: "stock-price-prediction-lstm",
    img: `${Proj2}`,
    name: "Stock price prediction LSTM",
    demo: "https://bkiyoshi.in/?project=stock-price-prediction-lstm",
    txt: `<div >
    <h1 className="p-5 items-center justify-center text-center text-2xl">
      Stock price prediction LSTM
    </h1>

    <div>
      <h1 className="text-xl">Technologies:</h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>AWS Sagemaker</li>
        <li>Pytorch</li>
        <li>LSTM</li>
        <li>Pandas</li>
        <li>Numpy</li>
      </ul>
    </div>

    <div className="mb-5">
      <p className="pt-5">
        As my capstone project for my Machine Learning Engineer Nanodegree
        at udacity, I used AWS sagemaker to create two machine learning
        models.
      </p>
      <p className="mb-5 mt-5">
        The first one was a regression model which aimed to predict future
        prices of a brazilian stock (WEGE3).
      </p>
      <p className="mb-5">
        The second was a classification model which, instead of
        prediciting the stock price, aimed to predict if the price would
        go up or down on the next day. Both models were based on LSTM's.
      </p>
      <p>
        Two datasets were used: historical prices of WEGE3 stocks and
        historical value of the BOVESPA index (Brazil's main benchamrk
        index).
      </p>
    </div>

    <div>
      <h1 className="text-xl">
        The project involved many machine learning engineering tasks such
        as:
      </h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>Feature Engineering</li>
        <li>Data cleaning</li>
        <li>Data scaling</li>
        <li>Uploading data do S3</li>
        <li>Building and training the models</li>
        <li>Hyperparameter tuning</li>
        <li>Deploying the model to AWS</li>
        <li>Testing and evaluating the models</li>
      </ul>
    </div>

    <div className="flex-col justify-center items-center pt-5">
      <p>
        A full report about the project can be found
        <a
          className="cursor-pointer underline"
          href="https://github.com/brunokiyoshi/Nanodegree-MLE-capstone-project/blob/main/Report.pdf"
          target="_blank"
          rel="noopener"
        >
          here.
        </a>
      </p>
      <p>
        Or check the complete
        <a
          className="cursor-pointer underline"
          title="Stock price prediction"
          href="https://github.com/brunokiyoshi/Nanodegree-MLE-capstone-project/"
          target="_blank"
          rel="noopener"
        >
          GitHub Repository!
        </a>
      </p>
    </div>
  </div>`
  },
  {
    key: "3",
    ref: "extraoil",
    img: `${Proj3}`,
    name: "ExtraOil",
    demo: "https://bkiyoshi.in/?project=extraoil",
    txt: `        <div >
    <h1 className="p-5 items-center justify-center text-center text-2xl">
      Company: Tubanharon Process Engineering
    </h1>

    <div>
      <h1 className="text-xl">Technologies:</h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>Excel</li>
        <li>VBA</li>
        <li>VB.NET</li>
      </ul>
    </div>

    <div className="mb-5">
      <p className="pt-5">
        ExtraOil is a process simulation software developed by Tubanharon.
      </p>
      <p className="mb-5 mt-5">
        It is aimed at the vegetable oil industry and helps engineers in
        crushing plants take decisions in process parameters.
      </p>
      <p className="mb-5">
        I helped test and debug it, as well as develop some new functions
        for it.
      </p>
    </div>

    <div className="flex-col justify-center items-center pt-10">
      <figure>
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/extraoil-main.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm pt-5">
          ExtraOil's main screen
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center pt-10"></div>
    <figure >
      <img
        
        src="http://bkiyoshi.in/wp-content/uploads/2022/10/rotochart.jpg"
        alt=""
      />
      <figcaption className="text-center text-sm pt-5 pb-5">
        ExtraOil's simulation screen
      </figcaption>
    </figure>
  </div>`
  },
  {
    key: "4",
    ref: "sentiment-analysis-web-app",
    img: `${Proj4}`,
    name: "Sentiment Analysis Web App",
    demo: "https://bkiyoshi.in/?project=sentiment-analysis-web-app",
    txt: `<div >
    <h1 className="p-5 items-center justify-center text-center text-2xl">
      Sentiment Analysis Web App
    </h1>

    <div>
      <h1 className="text-xl">Technologies:</h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>AWS Sagemaker</li>
        <li>AWS Lambda</li>
        <li>Amazon API Gateway</li>
        <li>LSTM</li>
        <li>Scikit-learn</li>
        <li>NLP</li>
        <li>PyTorch</li>
      </ul>
    </div>

    <div className="flex justify-center items-center pt-10">
      <figure >
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-13-171447.jpg"
          alt=""
        />
      </figure>
    </div>

    <div className="mb-5">
      <p className="pt-5">
        This was one of my projects during my Machine Learning Engineer
        Nanodegree.
      </p>
      <p className="mb-5 mt-5">
        I trained a LSTM model which would classify movie reviews as
        negativw or positive reviews.
      </p>
      <p className="mb-5">
        The model was created and trained in AWS SageMaker, and then
        deployed into a web app.
      </p>
    </div>

    <div>
      <h1 className="text-xl">
        Some machine learning engineering tasks I had to do during this
        project:
      </h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>Retrieving data.</li>
        <li>Processing / Preparing the data.</li>
        <li>Uploading the processed data to S3.</li>
        <li>Training the LSTM model.</li>
        <li>Testing the trained model using a batch transform job.</li>
        <li>Deploying the trained model.</li>
      </ul>

      <div className="mb-5">
        <p>
          For more details, please refer to the
          <a
            className="cursor-pointer underline"
            href="https://github.com/brunokiyoshi/mle-deployment-project"
          >
            GitHub Repository!
          </a>
        </p>
      </div>
    </div>
  </div>`
  },
  {
    key: "5",
    ref: "comos-tia-plugin",
    img: `${Proj5}`,
    name: "COMOS-TIA Plugin",
    demo: "https://bkiyoshi.in/?project=comos-tia-plugin",
    txt: `<div >
    <h1 className="p-5 items-center justify-center text-center text-2xl">
      Company: GreyLogix Brasil
    </h1>

    <div>
      <h1 className="text-xl">Technologies:</h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>C#</li>
        <li>VBScript</li>
        <li>FBD (Functional Block Diagram)</li>
      </ul>
    </div>

    <div className="mb-5">
      <h1 className="text-xl">
        COMOS and TIA Portal are two softwares sold by Siemens:
      </h1>
      <p className="font-bold mt-7">COMOS</p>
      <p className="mt-2">
        COMOS is a plant engineering software from Siemens. The
        applications for this software are in the process industries for
        the engineering, operation, and maintenance of process plants as
        well as their asset management.
      </p>
      <p className="font-bold mt-7">TIA Portal</p>
      <p className="mt-2">
        TIA Portal is basically a platform system integrators use to
        program PLC's that will automate the industry's machinery.
      </p>
      <h1 className="text-xl mt-10">
        COMOS is mainly a documentation software, whilst TIA Portal is
        like an IDE for industrial automation. The plugin I developed runs
        inside of COMOS and could do baically three things:
      </h1>
      <p className="font-bold mt-7">Hardware information exchange</p>
      <p className="mt-2">
        The plant's hardware (CPU's, sensors, actuators) could be
        configured in any of both softwares and information could be
        exchanged and updated in the other software
      </p>
      <p className="font-bold mt-7">Software information exchange</p>
      <p className="mt-2">
        The actual program could be written in any of both softwares and
        could be translated and exchanged to the other one.
      </p>
      <p className="font-bold mt-7">Comparison</p>
      <p className="mt-2">
        Both hardware and software could be compared. So The user could
        know if, for example, the software as documented inside COMOS
        actually matched the one running in TIA.
      </p>
      <p className="mt-2 p-4 font-medium">
        Some of the information could be exchanged via API's on both ends,
        but a lot of information required exchanging XML's. Coding inside
        TIA Portal is not done in text, but graphically (FBD), drawing and
        connecting function blocks available in the IDE. TIA Portal would
        only export the code in XML format, which was quite complex to
        interpret and transform into COMOS's FUP (Funktionsplan)
        convention.
      </p>
    </div>

    <div>
      <h1 className="text-xl">
        Some machine learning engineering tasks I had to do during this
        project:
      </h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>Retrieving data.</li>
        <li>Processing / Preparing the data.</li>
        <li>Uploading the processed data to S3.</li>
        <li>Training the LSTM model.</li>
        <li>Testing the trained model using a batch transform job.</li>
        <li>Deploying the trained model.</li>
      </ul>
    </div>
    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/comos-tia_2.png"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Main screen - the plugin runs inside COMOS
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/hw-compare-screen.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Hardware comparison screen
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/sw-compare-screen.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Software was compared using a comparison table
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/fbd-code.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          What code looks like in TIA Portal
        </figcaption>
      </figure>
    </div>
    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/code-in-comos.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          What code looks like COMOS
        </figcaption>
      </figure>
    </div>
  </div>`
  },
  {
    key: "6",
    ref: "extraoil-web",
    img: `${Proj6}`,
    name: "ExtraOil.Web",
    demo: "https://bkiyoshi.in/?project=extraoil-web",
    txt: `        <div >
    <h1 className="p-5 items-center justify-center text-center text-2xl">
      Company: Tubanharon Process Engineering
    </h1>

    <div>
      <h1 className="text-xl">Technologies:</h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>Python</li>
        <li>Django</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>VB.NET</li>
      </ul>
    </div>

    <div className="mb-5">
      <p className="mt-2">
        This was the last prototype I worked on while in Tubanharon.
      </p>
      <p className="mt-2">
        The goal was to port the ExtraOil software we had previously
        developed into a web environment.
      </p>
      <p className="mt-2">
        The main challenge in this project was to transform the ExtraOil
        software into something that could run in the backend of a web
        application.
      </p>
      <p className="mt-2">
        I remember another major challenge being streaming the results
        from the backend as they were being calculated.
      </p>
      <p className="mt-2">
        It has been a long time, but I remember having to deal with "Ajax"
        stuff.
      </p>
      <p className="mt-2">
        This application also featured the capability of saving
        simulations!
      </p>
      <p className="mt-2">
        Also, it could stage multiple simulations to run in sequence!
      </p>
    </div>
    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/xoilweb-main.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Home screen
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/xoil-web-params.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Simulation parameters
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/xoil-web-results.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Dyanmic results were streamed as calculated in the backend
        </figcaption>
      </figure>
    </div>
  </div>`
  },
  {
    key: "7",
    ref: "oxyfree",
    img: `${Proj7}`,
    name: "OxyFree",
    demo: "https://bkiyoshi.in/?project=oxyfree",
    txt: `<div >
    <h1 className="p-5 items-center justify-center text-center text-2xl">
      Company: Tubanharon Process Engineering
    </h1>

    <div>
      <h1 className="text-xl">Technologies:</h1>
      <ul className="list-item list-disc pl-10 my-5">
        <li>Python</li>
        <li>Django</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>PostgreSQL</li>
      </ul>
    </div>

    <div className="mb-5">
      <p className="mt-2">
        OxyFree was a prototype of a process simulator I developed for a
        client in the steel industry.
      </p>
      <p className="mt-2">
        This was my first (and the company's) contact with
        web-development, so it required a lot of self-learning and being
        able to look for solutions on my own.
      </p>
      <p className="mt-2 font-bold">It was really fun!</p>
    </div>
    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/oxyfree-main.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Main page
        </figcaption>
      </figure>
    </div>

    <div className="flex justify-center items-center pt-7">
      <figure className="pb-5">
        <img 
          src="http://bkiyoshi.in/wp-content/uploads/2022/10/oxyfree-params.jpg"
          alt=""
        />
        <figcaption className="text-center text-sm mb-5">
          Simulation parameters page
        </figcaption>
      </figure>
    </div>
  </div>`
  },
];

export default data