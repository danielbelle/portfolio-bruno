
import Proj0 from "../Assets/project-0.jpg";
import Proj1 from "../Assets/project-1.png";
import Proj2 from "../Assets/project-2.webp";
import Proj3 from "../Assets/project-3.jpg";
import Proj4 from "../Assets/project-4.jpg";
import Proj5 from "../Assets/project-5.png";
import Proj6 from "../Assets/project-6.jpg";
import Proj7 from "../Assets/project-7.jpg";

const data = [
  {
    key: "0",
    ref: "experimental-bench-automation-and-computer-vision-algorithm",
    img: `${Proj0}`,
    name: "Experimental Bench Automation and Computer Vision Algorithm",
    demo: "https://bkiyoshi.in/?project=experimental-bench-automation-computer-vision-algorithm",
    txt: `<div class="description">

    <span>Company: SINMEC (UFSC)</span>

<p>
<h5>Technologies:</h5>
<ul>
<li>Python;</li>
<li>Computer vision;</li>
<li>Arduino;</li>
<li>LabVIEW;</li>
<li>git;</li>
<li>MATLAB;</li>
</ul>

<p>At the lab I worked in during college we had this really cool experimental bench with water pumps, valves, an air diffuser, flow meters, cameras and <strong>LASERS:</strong></p>

<figure>
<img class="wp-image-84 " src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205538-e1665447625713.jpg" alt="" width="571" height="445" />
<figcaption>Schematic of the experimental bench</figcaption>
</figure>

<br>
<p>
My work was to <strong>automate</strong> it! So the guys teached me <strong>Python</strong>, <strong>LabVIEW</strong> and <strong>Arduino</strong>! And this was also my first time learning about <strong>git</strong>!
<br>
<br>
<strong>I. LOVED. IT.</strong>
<br>
<br>
After the bench was automated, then the work was to help develop a <strong>computer vision algorithm</strong> to measure flows by image. This was done in <strong>MATLAB</strong> and <strong>Python</strong>, mostly using the CV-2 package.
<br>
<br>
</p>

<h5>Check some images:</h5>
<figure><img class="wp-image-79 " src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205156-e1665447679311.jpg" alt="" width="532" height="387" /> 
<figcaption>Image processing steps in bubble identification procedure</figcaption>
</figure>

<figure>
<img class="wp-image-80 size-full" src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205330.jpg" alt="" width="447" height="475" /> 
<figcaption>Velocity vectors drawn over some bubbles </figcaption>
</figure>

<figure>
<img class="wp-image-83 " src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205453.jpg" alt="" width="805" height="383" />
<figcaption>Velocity vectors drawn over image, but for liquid phase</figcaption>
</figure>

<p>Honestly, with the explosion of neural networks in the last few years, our parametric approach to image segmentation is probably waaay outdated. But it was an amazing experience nonetheless!
<br>
<br>
If you'd like more detail, you can check our article in the link below:
<br>
<br>
<a href="https://www.sciencedirect.com/science/article/pii/S0009250918303269">https://www.sciencedirect.com/science/article/pii/S0009250918303269</a>
<br>
<br>
Absolutely do NOT use <a href="https://www.sci-hub.se/">sci-hub</a> to get access to it!
</p>
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
    txt: `<div class="description">

    <span>Company: GreyLogix Brasil</span>

<p>
</p><h5>Technologies:</h5>
<ul>
<li>Python;</li>
<li>Deep Learning;</li>
<li>Transfer Learning;</li>
<li>MATLAB;</li>
<li>Keras; imageai; opencv</li>

</ul>

<p>
I've recently developed a PoC for a big O&amp;G company in order to address a common issue in offshore oil rigs. <br>

Gas flares are equipment that burn natural gas when a processing unit is not capable of processing all the gas coming from a well. Methane and other gases present in natural gas is a lot worse than CO2 in terms of greenhouse effects. So the gas must be burned in order to convert it to CO2.

Monitoring of flares in offshore oil rigs is done by having a person periodicaly check whether the flare is lit or not. This is unacceptable in a context where companies must have control of their greenhouse gases emissions. <br>
<br>
So we made a vision system based on neural networks and a camera that would check it 24/7. In this first PoC, the system only checks whether the flare is on or off and estimates gas emissions based on that. In the future, the vision system should be able to assess flame quality (e.g. whether there is smoke or not, or estimates of how much of the gas is actually being burned), and take that into account in emission reports.
</p>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/main-interface.png" alt="" width="1215" height="611" class="alignnone size-full wp-image-150">
<figcaption>Main interface</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/sysoverview.png" alt="" width="1315" height="742" class="alignnone size-full wp-image-151">
<figcaption>System overview</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/sysvision.png" alt="" width="815" height="515" class="alignnone size-full wp-image-152">
<figcaption>Vision system working on a video</figcaption>
</figure>

<p></p>
</div>`
  },
  {
    key: "2",
    ref: "stock-price-prediction-lstm",
    img: `${Proj2}`,
    name: "Stock price prediction LSTM",
    demo: "https://bkiyoshi.in/?project=stock-price-prediction-lstm",
    txt: `

<div class="description">


        <p>
<h5>Technologies:</h5>
<ul>
<li>AWS Sagemaker</li>
<li>Pytorch</li>
<li>LSTM</li>
<li>Pandas</li>
<li>Numpy</li>
</ul>
<p>
As my capstone project for my Machine Learning Engineer Nanodegree at udacity, I used AWS sagemaker to create two machine learning models.
The first one was a regression model which aimed to predict future prices of a brazilian stock (WEGE3).
The second was a classification model which, instead of prediciting the stock price, aimed to predict if the price would go up or down on the next day.
Both models were based on LSTM's.
Two datasets were used: historical prices of WEGE3 stocks and historical value of the BOVESPA index (Brazil's main benchamrk index).
<p>
<h6>The project involved many machine learning engineering tasks such as:</h6>
<ul>
<li>Feature Engineering</li>
<li>Data cleaning</li>
<li>Data scaling</li>
<li>Uploading data do S3</li>
<li>Building and training the models</li>
<li>Hyperparameter tuning</li>
<li>Deploying the model to AWS</li>
<li>Testing and evaluating the models</li>
</ul>
<p>
A full report about the project can be found <a href="https://github.com/brunokiyoshi/Nanodegree-MLE-capstone-project/blob/main/Report.pdf" target="_blank" rel="noopener">here</a>.

Or check the complete <a title="Stock price prediction" href="https://github.com/brunokiyoshi/Nanodegree-MLE-capstone-project/" target="_blank" rel="noopener">GitHub Repository</a>!
</p>            </p>
</div>
</div>`
  },
  {
    key: "3",
    ref: "extraoil",
    img: `${Proj3}`,
    name: "ExtraOil",
    demo: "https://bkiyoshi.in/?project=extraoil",
    txt: `<div class="description">

    <span>Company: Tubanharon Process Engineering</span>

<p>
<h5>Technologies:</h5>
<ul>
<li>Excel;</li>
<li>VBA;</li>
<li>VB.NET;</li>
</ul>
<p>
ExtraOil is a process simulation software developed by Tubanharon. <br>
It is aimed at the vegetable oil industry and helps engineers in crushing plants take decisions in process parameters.<br>
I helped test and debug it, as well as develop some new functions for it.
</p>
<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/extraoil-main.jpg" alt="" width="1366" height="705" class="alignnone size-full wp-image-127" />
<figcaption>ExtraOil's main screen</figcaption>
</figure>
<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/rotochart.jpg" alt="" width="1786" height="910" class="alignnone size-full wp-image-118" />
<figcaption>ExtraOil's simulation screen</figcaption>
</figure>
</p>
</div>
</div>`
  },
  {
    key: "4",
    ref: "sentiment-analysis-web-app",
    img: `${Proj4}`,
    name: "Sentiment Analysis Web App",
    demo: "https://bkiyoshi.in/?project=sentiment-analysis-web-app",
    txt: `<div class="description">

            
    <p>
<h5>Technologies:</h5>
<ul>
<li>AWS Sagemaker</li>
<li>AWS Lambda</li>
<li>Amazon API Gateway</li>
<li>LSTM</li>
<li>Scikit-learn</li>
<li>NLP</li>
<li>PyTorch</li>
</ul>

<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-13-171447.jpg" alt="" width="462" height="128" class="alignnone size-full wp-image-165" />

<p> This was one of my projects during my Machine Learning Engineer Nanodegree.<br>
I trained a LSTM model which would classify movie reviews as negativw or positive reviews.<br>
The model was created and trained in AWS SageMaker, and then deployed into a web app.<br>

</p>
<h6>Some machine learning engineering tasks I had to do during this project:</h6>
<ul>
<li>Retrieving data.</li>
<li>Processing / Preparing the data.</li>
<li>Uploading the processed data to S3.</li>
<li>Training the LSTM model.</li>
<li>Testing the trained model using a batch transform job.</li>
<li>Deploying the trained model.</li>
</ul>

For more details, please refer to the <a href="https://github.com/brunokiyoshi/mle-deployment-project">GitHub Repository</a>!



</p>
</div>
</div>`
  },
  {
    key: "5",
    ref: "comos-tia-plugin",
    img: `${Proj5}`,
    name: "COMOS-TIA Plugin",
    demo: "https://bkiyoshi.in/?project=comos-tia-plugin",
    txt: `<div class="description">

    <span>Company: GreyLogix Brasil</span>

<p>
<h5>Technologies</h5>
<ul>
<li>C#;</li>
<li>VBScript</li>
<li>FBD (Functional Block Diagram);

</ul>


<p>COMOS and TIA Portal are two softwares sold by Siemens:</p>
<dl>
<dt>COMOS </dt>
<dd>COMOS is a plant engineering software from Siemens. The applications for this software are in the process industries for the engineering, operation, and maintenance of process plants as well as their asset management.</dd>
<dt>TIA Portal</dt>
<dd>TIA Portal is basically a platform system integrators use to program PLC's that will automate the industry's machinery.</dd>
</dl>
<p>
COMOS is mainly a documentation software, whilst TIA Portal is like an IDE for industrial automation.
The plugin I developed runs inside of COMOS and could do baically three things:
</p>
<dl>
<dt>Hardware information exchange</dt>
<dd>The plant's hardware (CPU's, sensors, actuators) could be configured in any of both softwares and information could be exchanged and updated in the other software.</dd>
<dt>Software information exchange</dt>
<dd>The actual program could be written in any of both softwares and could be translated and exchanged to the other one.</dd>
<dt>Comparison</dt>
<dd>Both hardware and software could be compared. So The user could know if, for example, the software as documented inside COMOS actually matched the one running in TIA.</dd>
</dl>
<p>
Some of the information could be exchanged via API's on both ends, but a lot of information required exchanging XML's.
Coding inside TIA Portal is not done in text, but graphically (FBD), drawing and connecting function blocks available in the IDE. TIA Portal would only export the code in XML format, which was quite complex to interpret and transform into COMOS's FUP (Funktionsplan) convention.
</p>
<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/comos-tia_2.png" alt="" width="1920" height="1031" class="alignnone size-full wp-image-138" />
<figcaption>Main screen - the plugin runs inside COMOS</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/hw-compare-screen.jpg" alt="" width="995" height="595" class="alignnone size-full wp-image-142" />
<figcaption>Hardware comparison screen</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/sw-compare-screen.jpg" alt="" width="373" height="247" class="alignnone size-full wp-image-143" />
<figcaption>Software was compared using a comparison table.</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/fbd-code.jpg" alt="" width="713" height="736" class="alignnone size-full wp-image-146" />
<figcaption>What code looks like in TIA Portal.</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/code-in-comos.jpg" alt="" width="1140" height="803" class="alignnone size-full wp-image-145" />
<figcaption>What code looks like COMOS.</figcaption>
</figure>


</p>
</div>
</div>`
  },
  {
    key: "6",
    ref: "extraoil-web",
    img: `${Proj6}`,
    name: "ExtraOil.Web",
    demo: "https://bkiyoshi.in/?project=extraoil-web",
    txt: `<div class="description">

    <span>Company: Tubanharon Process Engineering</span>

<p>
<h5>Technologies</h5>
<ul>
<li>Python;</li>	
<li>Django;</li>
<li>CSS; HTML; Javascript;</li>
<li>VB.NET;</li>

</ul>


<p>
This was the last prototype I worked on while in Tubanharon.<br>
The goal was to port the ExtraOil software we had previously developed into a web environment.<br>
The main challenge in this project was to transform the ExtraOil software into something that could run in the backend of a web application.<br>
I remember another major challenge being streaming the results from the backend as they were being calculated.<br>
It has been a long time, but I remember having to deal with "Ajax" stuff.<br>
This application also featured the capability of saving simulations!<br>
Also, it could stage multiple simulations to run in sequence!<br>
</p>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/xoilweb-main.jpg" alt="" width="1299" height="731" class="alignnone size-full wp-image-134" />
<figcaption>Home screen</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/xoil-web-params.jpg" alt="" width="1299" height="731" class="alignnone size-full wp-image-132" />
<figcaption>Simulation parameters</figcaption>
</figure>

<figure>

<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/xoil-web-results.jpg" alt="" width="1299" height="731" class="alignnone size-full wp-image-133" />
<figcaption>Dyanmic results were streamed as calculated in the backend</figcaption>
</figure>
</p>
</div>
</div>`
  },
  {
    key: "7",
    ref: "oxyfree",
    img: `${Proj7}`,
    name: "OxyFree",
    demo: "https://bkiyoshi.in/?project=oxyfree",
    txt: `<div class="description">

    <span>Company: Tubanharon Process Engineering</span>

<p>
<h5>Technologies</h5>
<ul>
<li>Python;</li>
<li>Django;</li>
<li>Bootstrap</li>
<li>JavaScript</li>
<li>HTML</li>
<li>CSS</li>
<li>PostgreSQL</li>
</ul>
<p>
OxyFree was a prototype of a process simulator I developed for a client in the steel industry.
This was my first (and the company's) contact with web-development, so it required a lot of self-learning and being able to look for solutions on my own. It was really fun!
</p>
<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/oxyfree-main.jpg" alt="" width="1905" height="818" class="alignnone size-full wp-image-124" />
<figcaption>Main page</figcaption>
</figure>

<figure>
<img src="http://bkiyoshi.in/wp-content/uploads/2022/10/oxyfree-params.jpg" alt="" width="1848" height="964" class="alignnone size-full wp-image-125" />
<figcaption>Simulation parameters page</figcaption>
</figure>            </p>
</div>
</div>`
  },
];

export default data