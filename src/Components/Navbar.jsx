import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import Navimg from "../assets/navbg.png";
import Trolley from "../assets/Trolley.png";
import Logo from "../assets/Logo.png";
import Wish from "../assets/Wishlist.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* <div style="background-image: url()"> */}
        <div className="relative min-h-screen " >
          <div className="absolute opacity-95" >
          <img src={Navimg} alt="" className="w-screen h-screen md:w-screen md:h-screen object-cover" />
        </div>

        {/* make two divs in mobile view left would be the logo and right would be dropdown menu and the three
 logos and in the right ddiv make the dropdown toggleMenu smaller  */}

        <div className="h-24 p-4 flex text-white w-full justify-between absolute text-sm font-light">

          <div >
            <img src={Logo} alt="" className="h-12 w-24" />
          </div>

          <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
            <ul className="flex gap-6 pt-2">
              <Link to="/">Home</Link>
              <Link to="/Shop">Shop</Link>
              <Link to="/OurStory">Our Story</Link>
              <Link to="/Faq">Faq</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/Contact">Contact</Link>
            </ul>
          </div>


          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none">
              <AiOutlineMenuUnfold size={45} />
            </button>
          </div>

          {/* <div className="flex justify-end md:flex"> */}
          <div className="flex gap-4 pb-5">
            <div className="flex items-center">
              <IoMdLogIn size={25} color="blue" />
              <h1>Login</h1>
            </div>
            <div className="flex items-center ">
              <img src={Wish} alt="" className="h-6 w-6" />
            </div>
            <div className="flex items-center ">
              <img src={Trolley} alt="" className="h-6 w-7" />
            </div>
          </div>
          {/* </div> */}


        </div>



        <div className="flex justify-center ">
          <h1 className="absolute z-[999] text-white text-5xl font-bold text-center mt-44">Make Your Interior More <br /> Minimalist & Modern </h1>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;


