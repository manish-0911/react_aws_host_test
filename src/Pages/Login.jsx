import React from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import LoginImg from "../assets/Login/LoginImg1.png"

function Login() {
  return (
    <>

      {/* TWO MAIN DIV LEFT(IMAGES) & RIGHT(CONTENT) LEFT HIDDEN ON MOBILE VIEW*/}
      <div className='flex justify-center md:justify-normal '>

        {/* LEFT CONTENT */}
        {/* HIDDEN ON MOBILE VIEW  */}
        <div className="hidden md:block bg-cover bg-center w-2/3 h-screen" style={{ backgroundImage: `url(${LoginImg})` }}></div>
        {/* <div className='md:block md:h-screen '> */}
          {/* <img src={LoginImg} alt="" /> */}
        {/* </div> */}

        {/* RIGHT-CONTENT */}
        {/* HEADING */}
        <div className='mt-14 md:mt-4 md:w-1/2 md:ml-6'>
          <div className='text-center md:text-left md:px-8'>

            <h1 className='md:hidden text-4xl font-bold py-4 text-[#444B59]'>WOODEN GALAXY</h1>
            <h1 className='hidden md:block text-6xl font-bold py-4 text-[#444B59]'>WELCOME</h1>

            <h3 className='text-base mt-2 text-[#444B59] pb-{10px}'>Don't have a account <span className='text-base text-[#B5B0AB]'>Sign up</span> </h3>

          </div>

          {/* USERNAME AND INPUTFIELD */}
          <div className='mt-7'>
            <form action="" method="post" className='md:px-8'>
              <div className="mb-4">
                <label className="block my-3 text-2xl text-[#444B59]" for="username">Username</label>
                <input type="text" id="username" className="w-full border-2 border-[#B5B0AB] p-4 rounded-full md:h-14" placeholder="deniel123@gmail.com" />
              </div>

              {/* PASSWORD AND INPUTFIELD */}
              <div className="mb-4">
                <label className="block my-3 text-2xl text-[#444B59]" for="password">Password</label>
                <input type="password" id="password" className="w-full border-2 border-[#B5B0AB]  p-4 rounded-full md:h-14" placeholder="••••••••" />
              </div>

              {/* REMEMBER ME and FORGOT PASSWORD */}
              <div className="mt-9 flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox md:w-5 md:h-5" />
                  <span className="pl-2 md:text-xl text-[#444B59]">Remember me</span>
                </label>
                <p className="hover:underline md:text-xl text-[#444B59]">Forgot password?</p>
              </div>

              {/* SIGN IN Button  */}
              <button className="w-full mt-6 border-2 p-2 rounded-full outline-none text-[white] border-[#B5B0AB] md:h-14 bg-[#B5B0AB]">Sign In</button>

              <div className="mt-4 flex items-center justify-center">
                <hr className="w-28 decoration-[#415ab5]" /> <span className='p-2 mb-1 text-[#444B59]'>or continue with</span> <hr className="w-28 decoration-[#C8D3F9]" />
              </div>

              {/* GOOGLE FACEBOOK IOS logo */}
              <div className="flex justify-evenly mt-6">
                <button type="button" className="rounded-lg border-2 border-gray-200 p-2">
                  <FcGoogle className='text-3xl mx-3' />
                </button>
                <button type="button" className="rounded-lg border-2 border-gray-200 p-2">
                  <FaFacebook className='text-[#8699da] text-3xl mx-3' />
                </button>
                <button type="button" className="rounded-lg border-2 border-gray-200 p-2">
                  <FaApple className='text-[#444B59] text-3xl mx-3' />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </>
  )
}

export default Login