import React, { useRef, useState } from "react";
import Email from "../Assets/email.png";
import WhatsApp from "../Assets/whatsapp.jpg";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";

function Contact() {
  const WA =
    "https://wa.me//5548999756772?text=Hi%20I%20was%20interested%20in%20your%20work";

  const form = useRef();
  const [input, setInput] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (input === "") {
      alert("Please fill in a valid email address!");
      return;
    }

    try {
      emailjs
        .sendForm(
          "service_s8nljg4",
          "template_gond1fs",
          form.current,
          "2ip1oI5hY4jTjN8JS"
        )
        .then(
          (result) => {
            alert("Your email has been received, we will be responding soon!");
          },
          (error) => {
            alert(error.text);
          }
        );
      setInput("");
    } catch {
      alert("We had an error in the email, please forward");
      setInput("");
    }
  };
  return (
    <div
      id="contact"
      className="flex justify-center flex-col h-[80hv] max-w-[1160px] m-auto relative h-min-[500px] box-border sm:mt-[15rem] md:mt-[7rem] lg:mt-[5rem] pt-[8rem] min-w-[350px]"
    >
      <p className="flex justify-center font-[600] text-gray-600">Send your</p>
      <h1 className="flex justify-center text-[3rem] font-[600] mb-10">
        Contact
      </h1>
      <div className="content justify-center rounded-[32px] border-solid border-[0.1rem] border-gray-500 sm:m-auto bg-transparent m-5">
        <div className="flex items-center justify-center gap-0 sm:gap-[1rem] m-[1rem]">
          <img
            src={Email}
            alt="Email icon"
            className="cursor-default h-[2rem]"
          />
          <form ref={form} onSubmit={sendEmail}>
            <div className="bg-transparent max-w-[700px] w-[70%] sm:w-[100%] items-center rounded-[5rem] whitespace-nowrap">
              <input
                type="email"
                name="user_email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="email@email.com"
                className="flex-1 h-[100%] border-none outline-none font-[1rem] sm:font-[1.3rem] mx-[0.3rem] my-[1rem] sm:placeholder:text-[1rem] placeholder:text-[0.9rem] placeholder:text-gray-500 w-[80%] sm:w-[100%]"
              ></input>
              <input
                className="bg-transparent text-[1rem] sm:text-[1.2rem] cursor-pointer font-[600] text-black transition duration-200 items-center justify-center sm:ml-[1rem]"
                type="submit"
                value={"Send"}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center sm:m-auto bg-transparent m-5 pt-[32px]">
        <Link to={WA} spy={true} smooth={true} offset={0} duration={300}>
          <p className="flex justify-center font-[600]"></p>
        </Link>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-5"
        >
          <img
            src={WhatsApp}
            alt="Email icon"
            className="cursor-pointer h-[2rem] ml-[0.5rem]"
          />
          <p className="flex justify-center font-[600] items-center text-black">WhatsApp Me</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
