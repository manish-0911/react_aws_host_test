import React from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import LoginImg from "../assets/Login/LoginImg1.png"

function Signup() {
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
                <div className='mt-6 md:mt-4 md:w-1/2 md:ml-6'>
                    <div className='text-center md:text-left md:px-8'>
                        <h1 className='text-4xl font-bold text-[#444B59]'>Create Account</h1>
                    </div>

                    {/* USERNAME AND INPUTFIELD */}
                    <div className='mt-4'>
                        <form action="" method="post" className='md:px-8'>
                            <div className="flex gap-4 px-3">
                                <div className=''>
                                    <label className="block px-3 text-lg text-[#444B59]" for="username">First Name</label>
                                    <input type="text" id="username" className="w-full border-2 border-[#B5B0AB] h-1/2 p-4 rounded-full md:h-14 outline-[#8f8b86]" />
                                </div>
                                <div>
                                    <label className="block px-3 text-lg text-[#444B59]" for="username">Last Name</label>
                                    <input type="text" id="username" className="w-full border-2 border-[#B5B0AB] h-1/2 p-4 rounded-full md:h-14 outline-[#8f8b86]" />
                                </div>
                            </div>
                            <div className="mb-4 px-3">
                                <label className="block px-3 text-lg text-[#444B59]" for="password">Enter Mobile Number</label>
                                <input type="number" id="password" className="w-full border-2 border-[#B5B0AB]  h-1/2 p-4 rounded-full md:h-14 outline-[#8f8b86]" />
                            </div>

                            {/* PASSWORD AND INPUTFIELD */}
                            <div className="mb-4 px-3">
                                <label className="block px-3 text-lg text-[#444B59]" for="password">Email address</label>
                                <input type="email" id="password" className="w-full border-2 border-[#B5B0AB]  h-1/2 p-4 rounded-full md:h-14 outline-[#8f8b86]" />
                            </div>
                            <div className="mb-4 px-3">
                                <label className="block px-3 text-lg text-[#444B59]" for="password">Choose Password</label>
                                <input type="password" id="password" className="w-full border-2 border-[#B5B0AB]  h-1/2 p-4 rounded-full md:h-14 outline-[#8f8b86]" />
                            </div>
                            <div className="mb-4 px-3">
                                <label className="block px-3 text-lg text-[#444B59]" for="password">Confirm Password</label>
                                <input type="password" id="password" className="w-full border-2 border-[#B5B0AB]  h-1/2 p-4 rounded-full md:h-14 outline-[#8f8b86]" />
                            </div>

                            {/* SIGN IN Button  */}
                            <div className='flex justify-center'>
                                <button className="w-1/2 border-2 p-2 rounded-full outline-none text-[white] border-[#B5B0AB] md:h-14 bg-[#B5B0AB]">SUBMIT</button>
                            </div>

                            <div className="mt-3 flex items-center justify-center">
                                <hr className="w-28 decoration-[#415ab5]" /> <span className='p-2 mb-1 text-[#444B59]'>or continue with</span> <hr className="w-28 decoration-[#C8D3F9]" />
                            </div>

                            {/* GOOGLE FACEBOOK IOS logo */}
                            <div className="flex justify-evenly mt-3">
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

export default Signup