import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dimg from "../assets/faq/Dimg.png";
import Pimg from "../assets/faq/Pimg.png";
import Yimg from "../assets/faq/Yimg.png";
import Nav from "../assets/faq/Nav.png";

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);

  const accordionData1 = [
    {
      question: "How long does it take for delivery?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Can I collect from the local store?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Do you deliver on weekends?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  const accordionData2 = [
    {
      question: "Which card do you accept?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Can I use different payment methods?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  const accordionData3 = [
    {
      question: "Where is my order?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Can I have an update on my order status?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "How can I make a complaint?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  const handleAccordionClick1 = (index) => {
    setActiveIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAccordionClick2 = (index) => {
    setActiveIndex2((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAccordionClick3 = (index) => {
    setActiveIndex3((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div>
        <div className="w-full h-50 flex justify-center items-center">

          <img src={Nav} alt="" />
          
          <div className="absolute flex flex-col items-center justify-center">
</div>
          <div className="absolute flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Faq</h1>
            <ul className="mt-5 flex gap-1">
              <li>
                <Link to="/" style={{ opacity: 1 }}>
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.5 }}>&gt;</li>
              <li>
                <Link to="/Faq" style={{ opacity: 0.5 }}>
                  Faq
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-7 ">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#AF835E]">
            Frequently Asked Question
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-3 mt-14">
          <div className="lg:ml-28 mt-5 leading-10 w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-3 text-[#AF835E]">Delivery</h1>
            {accordionData1.map((item, index) => (
              <div
                key={index}
                className={`accordion-item cursor-pointer ${
                  activeIndex1 === index ? "border-b-2" : ""
                }`}
                style={{ marginBottom: "20px" }}
              >
                <h1
                  className="text-[30px] lg:text-[30px] border-b-2"
                  onClick={() => handleAccordionClick1(index)}
                >
                  {item.question}
                </h1>
                {activeIndex1 === index && (
                  <p className="text-[15px] lg:text-[15px] text-[#9F9F9F] mt-4 max-h-40 overflow-y-auto">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="lg:mt-10">
            <img
              src={Dimg}
              alt=""
              className="h-[358px] lg:h-[358px] w-full lg:w-[550px] rounded-[30px 0 0 30px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10 lg:mt-20">
          <div className="lg:mt-10">
            <img
              src={Pimg}
              alt=""
              className="h-[258px] lg:h-[258px] w-full lg:w-[550px] rounded-[30px 0 0 30px] mt-32 lg:mt-0"
            />
          </div>
          <div className="lg:ml-28 mt-5 leading-10 w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-3 text-[#AF835E]">Payment</h1>
            {accordionData2.map((item, index) => (
              <div
                key={index}
                className={`accordion-item cursor-pointer ${
                  activeIndex2 === index ? "border-b-2" : ""
                }`}
                style={{ marginBottom: "20px" }}
              >
                <h1
                  className="text-[30px] lg:text-[30px] border-b-2"
                  onClick={() => handleAccordionClick2(index)}
                >
                  {item.question}
                </h1>
                {activeIndex2 === index && (
                  <p className="text-[15px] lg:text-[15px] text-[#9F9F9F] mt-4 max-h-40 overflow-y-auto">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-3 mt-20">
          <div className="lg:ml-28 mt-5 leading-10 w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-3 text-[#AF835E]">
              Your Order
            </h1>
            {accordionData3.map((item, index) => (
              <div
                key={index}
                className={`accordion-item cursor-pointer ${
                  activeIndex3 === index ? "border-b-2" : ""
                }`}
                style={{ marginBottom: "20px" }}
              >
                <h1
                  className="text-[30px] lg:text-[30px] border-b-2"
                  onClick={() => handleAccordionClick3(index)}
                >
                  {item.question}
                </h1>
                {activeIndex3 === index && (
                  <p className="text-[15px] lg:text-[15px] text-[#9F9F9F] mt-4 max-h-40 overflow-y-auto">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="lg:mt-10">
            <img
              src={Yimg}
              alt=""
              className="h-[358px] lg:h-[358px] w-full lg:w-[550px] rounded-[30px 0 0 30px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
