import React from "react";
import rectangle from "../assets/Rectangle1451.png";
import material from "../assets/Rectangle1446.png";
// import { FaLongArrowAltRight } from "react-icons";
import material_1 from "../assets/Group48095417.png";
import material_2 from "../assets/Group48095419.png";

const B_experience = () => {
  return (
    <div>
      <section className="my-6">
        <div className="md:flex md:gap-20 md:justify-center">
          <div className="flex flex-col items-center">
            <img
              className="h-[350px] rounded-xl md:w-[450px]"
              src={rectangle}
              alt="image"
            />
          </div>
          <div className=" text-center p-2 md:w-[400px] md:text-left md:mt-16">
            <h5 className="italic my-2 text-[#E58411]">EXPERIENCES</h5>
            <h2 className="text-[#1E1E1E] italic text-2xl">
              We Provide You The <br /> Best Experience
            </h2>
            <p className="text-[#1E1E1E] text-sm opacity-70">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
            <a href="#" className="flex justify-center italic text-[#E58411]">
              More info
              {/* <FaLongArrowAltRight className="mt-[6px]" /> */}
            </a>
          </div>
        </div>
      </section>

      <section className="my-6">
        <div className="flex flex-col-reverse md:flex md:flex-row md:gap-20 md:justify-center">
          <div className="text-center p-2 md:w-[400px] md:text-left md:mt-16">
            <h5 className=" italic my-2 text-[#E58411]">MATERIALS</h5>
            <h2 className="text-[#1E1E1E] italic text-2xl">
              Very Serious Materials For <br /> Making Furniture
            </h2>
            <p className="text-[#1E1E1E] text-sm opacity-70">
              Because WG was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <a href="#" className="flex justify-center italic text-[#E58411]">
              More info
              {/* <FaLongArrowAltRight className="mt-[6px]" /> */}
            </a>
          </div>

          <div className=" flex flex-col items-center md:flex md:flex-row md:justify-center">
            <div>
              <img
                className="h-44 mt-6 w-40 hidden md:block"
                src={material_1}
                alt="chair"
              />
              <img
                className="h-48 w-40 hidden md:block"
                src={material_2}
                alt="sofa"
              />
            </div>

            <div className="flex flex-col items-center">
              <img
                className="h-[350px] w-96 rounded-xl"
                src={material}
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B_experience;
