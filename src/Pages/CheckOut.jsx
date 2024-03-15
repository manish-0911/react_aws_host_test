import React from "react";
import img from "../assets/OurStory.png";

const CheckOut = () => {
  return (
    <>
      <div className="relative">
        <img
          src={img}
          alt="An Image"
          className="w-full h-auto z-[-1] opacity-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-medium text-2xl md:text-4xl">CheckOut</p>
          <p className="text-sm">
            Home <strong>&gt;</strong> CheckOut
          </p>
        </div>
      </div>

      <div className="flex mt-12 ml-28">
        <div className="flex-none w-[608px]  top-[479px] left-[734px] ">
          <div>
            <label className=" md: text-3xl mt-4 md:mt-32 font-bold">
              Billing details
            </label>
          </div>
          <form action="#" method="post">
            <div className="flex mt-8">
              <div className="flex-none">
                <label> First Name </label><br />
                <input
                  type="text"
                  className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 md:mt-4 w-[211px] mr-4"
                />
              </div>
              <div className="flex-initial ">
                <label> Last Name </label><br />
                <input
                  type="text"
                  className="border-black border-2 opacity-50 rounded-md h-[75px] mt-2 md:mt-4 w-[211px] mr-4"
                />
              </div>
            </div>
            <div className="mt-8">
              <label className="mt-5">Company Name (Optional)</label>
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Country / Region</label> <br />
              <select name="" id="" className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5">
                <option value="" >Sri Lanka</option>
              </select>
            </div>
            <div className="mt-8">
            <label className="mt-5">Street address</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Town / City</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Province</label><br />
            <select name="" id="" className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5">
                <option value="" >Western Province</option>
              </select>
            </div>
            <div className="mt-8">
            <label className="mt-5">ZIP Code</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Phone</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
            <label className="mt-5">Email Address</label><br />
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                className="border-black border-2 opacity-50 rounded-md h-[75px]  mt-2 w-[453px] md:mt-5 "
              />
            </div>
          </form>
        </div>
        <div className="flex-initial w-[708px] h-[789px] top-[479px] left-[734px]">
        <div className="flex gap-80">
            <div>
              <h1 className="mt-4 w-[94px] h-[36px] font-medium size-[24px] leading-9 text-2xl">Product</h1>
              <h1 className="mt-4 opacity-50">Asgaard sofa X 1</h1>
              <h1 className="mt-4 ">Subtiotal</h1>
              <h1 className="mt-4 mb-4">Total</h1>
            </div>
            <div >
              <h1 className="mt-4 font-medium size-[24px] leading-9 w-[103px] text-2xl">Subtotal</h1>
              <h1 className="mt-6 text-base">Rs.250,000.00</h1>
              <h1 className="mt-6 size-[16px] text-base">Rs.250,000.00</h1>
              <p className="mb-4 mt-5 font-bold w-[178px] h-[36px] text-[#B88E2F;] text-2xl -ml-10">Rs.250,000.00</p>
            </div>
          </div>
          <hr />
          <div>
            <input type="radio" name="radio" className="mt-3"/>   Direct Bank Transfer
            <h1 className="opacity-50 mt-3">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h1>
           <div className="opacity-50">
            <input type="radio" name="radio" className="opacity-50 mt-3"/>  Direct Bank Transfer <br />
            <input type="radio" name="radio" className="opacity-50 mt-3"/>  Cash On Delivery</div>
            
            <p className="mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy</span></p>
          </div>
          <button className="rounded-2xl border-black border-2 ml-40 top-[1118px] left-[883px] w-[318px] h-[64px] mt-8">Place order</button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
