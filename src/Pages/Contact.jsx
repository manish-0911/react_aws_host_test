import React from "react";
import { Link } from "react-router-dom";
import Nav from "../assets/faq/Nav.png";

const Contact = () => {
  return (
    <>
    <div>
        <div className="w-full h-50 flex justify-center items-center">
          <img src={Nav} alt="" className="w-screen" />

          <div className="absolute flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">Contact</h1>
            <ul className="mt-5 flex gap-1">
              <li>
                <Link to="/" style={{ opacity: 1 }}>
                  Home
                </Link>
              </li>
              <li style={{ opacity: 0.5 }}>&gt;</li>
              <li>
                <Link to="/Faq" style={{ opacity: 0.5 }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact