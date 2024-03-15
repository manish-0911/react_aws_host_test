import React from "react";
import MainCardData_2 from "./MainCardData_2";
// import McardData from "./McardData";
export default function AbhiCards_2() {
  return (
    <div>
      <div className="w-full flex justify-center sm:mx-auto">
        <div className="w-full md:w-4/5 lg:w-8/12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-3 ">
            {MainCardData_2.map((cardData) => (
              <>
                <div
                  key={cardData.id}
                  className="bg-white shadow-md  overflow-hidden transition-transform transform hover:scale-105 rey
                  lative"
                >
                  <div className="overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={cardData.imagescr}
                      alt={cardData.heading}
                    />
                  </div>
                  <div className="p-2 flex flex-col">
                    <p className="text-sm font-medium">{cardData.heading}</p>
                    <p className="text-sm">{cardData.para}</p>
                    <p className="text-sm">{cardData.price}</p>
                  </div>
                  
                </div>
                <div className="absolute text-white flex ml-44 w-[48px] h-[48px] rounded-full bg-[#2EC1AC] mt-4 ">
                  <h1 className="text-center mt-3 ml-2">New</h1>
                </div>
                
              </>
            ))}
          </div>
        </div>
        {/*  div for buttons  */}
      </div>

      <div className="px-10 py-5 flex  w-[400px] flex-wrap mx-auto sm:mx-auto">
        <button class=" border-yellow-600  bg-[#B88E2F] rounded-md text-white font-bold px-4 py-2 flex mx-auto ">
          1
        </button>

        <button class=" border-yellow-100 bg-[#F9F1E7] rounded-md  px-4 py-2 flex mx-auto ">
          2
        </button>

        <button class=" border-yellow-600 bg-[#F9F1E7] rounded-md  px-4 py-2 flex mx-auto ">
          3
        </button>

        <button class="  bg-[#F9F1E7] rounded-md   px-4 py-2 flex mx-auto ">
          Next
        </button>
      </div>
    </div>
  );
}
