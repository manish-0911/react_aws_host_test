import React from "react";
import McardData from "./McardData";

function MainCards() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full px-[5%]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-3">
            {McardData.map((cardData) => (
              <div
                key={cardData.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCards;
