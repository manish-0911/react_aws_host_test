import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



// import images
import side4 from "../assets/single_products/side4.png"
import main from "../assets/single_products/main_image.png"
import stars from "../assets/single_products/5stars.png"
import Des1 from "../assets/single_products/description1.png"
import Des2 from "../assets/single_products/description2.png"
import ProductCard from '../Components/ProductCard';

const Single_product = () => {
  return (
    < >
      {/* ADDING NAVBAR SECTION */}

      <div className=' flex items-center  bg-[#F9F1E7] h-[100px]  w-full '>
        <div className='flex items-center ml-24 gap-6'>

          <div className='w-[82px] h-[24px] flex items-center '>
            <Link to="/" className='text-[#9F9F9F] font-normal'> Home </Link>
            <div className='ml-6'><FaChevronRight /></div>
          </div>

          <div className='w-[82px] h-[24px] flex items-center '>
            <Link to="/Shop" className='text-[#9F9F9F] font-normal'> Shop </Link>
            <div className='ml-7'><FaChevronRight /></div>
          </div>


          <div className='h-7 border-[1px] border-[#9F9F9F]'></div>
          <div className='font-semibold'>
            Asgaard sofa
          </div>

        </div>
      </div>
      {/* NAVBAR ENDED */}

      {/* 2ND SECTION */}

      <div className='flex gap-12 mb-7 w-full'>

        <div className='h-[520px] w-[553px] flex border-black border-2 ml-24 mt-8 '>
          <div>
            <img src={side4} alt="" />
          </div>

          <div>
            <img src={main} alt="" />
          </div>
        </div>

        {/* right side code */}

        <div className='h-[790px] w-[610px] border-black border-2 mt-8'>
          <div className='w-[280px] h-[65px] text-[42px] mb-[5px]'>
            Asgaard sofa
          </div>

          <div className='text-[#9F9F9F] w-[173px] h-[36px] text-2xl mb-[5px]'>
            Rs. 250,000.00
          </div>

          <div className='flex gap-5 mb-[10px]'>
            <div>
              <img src={stars} alt="" />
            </div>

            <div className='h-6 border-[1px] border-[#9F9F9F]'></div>

            <div className='text-[13px] text-[#9F9F9F]'>
              5 Customer Review
            </div>
          </div>

          <div className='w-[424px] h-[95px] text-[15px] mb-[10px]'>
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </div>

          <div className='text-[1rem] text-[#9F9F9F] w-[27px] h-[21px] mb-[20px]'>
            Size
          </div>

          <div className='flex gap-4 mb-5'>
            <div className='h-[30px] w-[30px] rounded-[5px] bg-[#B88E2F] text-center'>L</div>
            <div className='h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-center'>XL</div>
            <div className='h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-center'>XS</div>
          </div>


          <div className='text-[1rem] text-[#9F9F9F] w-[27px] h-[21px] mb-[20px]'>
            Color
          </div>

          <div className='flex gap-4 mb-5'>
            <div className='h-[30px] w-[30px] rounded-[50%] bg-[#816DFA] text-center'></div>
            <div className='h-[30px] w-[30px] rounded-[50%] bg-[#000000] text-center'></div>
            <div className='h-[30px] w-[30px] rounded-[50%] bg-[#B88E2F] text-center'></div>
          </div>

          <div className='mt-[50px] flex gap-3 mb-[40px]'>

            <div className='w-[123px] h-[65px] text-lg border-[#9F9F9F] border-[1px] rounded-[10px] flex justify-evenly items-center'>
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>

            <div className='w-[215px] h-[65px] text-lg border-[#000000] border-[1px] rounded-[10px] flex justify-evenly items-center'>
              <div>Add To Cart</div>
            </div>
            <div className='w-[215px] h-[65px] text-lg border-[#000000] border-[1px] rounded-[10px] flex justify-evenly items-center'>
              <div className='flex gap-2'>
                <div>+</div>
                <div>Compare</div>
              </div>
            </div>
          </div>

          <div className='w-[605px] border-[1px] border-[#D9D9D9] rounded-sm '></div>

          <div className='text-[#9F9F9F] mt-5 leading-9'>
            <div>SKU &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : SS001</div>
            <div>Category &nbsp; &nbsp; : Sofas</div>
            <div>Tags &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : Sofa , Chair ,Home, Shop</div>

            <div className='flex items-center gap-1 '>
              <div>Share &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;: </div>

              <div className='flex gap-5 text-black'>
                <div>
                  <FaFacebook />
                </div>
                <div>
                  <FaLinkedin />
                </div>
                <div>
                  <FaTwitter />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* SECOND SECTION ENDS HERE */}

      {/* SINGLE LINE  */}

      <div className='w-full  border-[#D9D9D9] border-[1px] mb-9'></div  >

      {/* DISCRIPTION SECTION */}

      <div className='w-full h-9 flex justify-center gap-10 my-20'>
        <div className='text-2xl font-medium underline'>Description</div>
        <div className='text-2xl text-[#9F9F9F]'>Additional Information</div>
        <div className='text-2xl text-[#9F9F9F]'>Reviews[5]</div>
      </div>

      <div className='flex justify-center'>
        <div className='w-[90%] text-[#9F9F9F] text-base px-14 '>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
          unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the
          bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-
          balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and
          pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the
          guitar-influenced leather strap enables easy and stylish travel.
        </div>
      </div>

      {/* des images */}

      <div className='flex justify-center gap-5  mt-4 mb-14'>
        <div className='rounded-xl '><img src={Des1} alt="" /></div>
        <div className='rounded-xl  bg-[#F9F1E7]'><img src={Des2} alt="" /></div>
      </div>

      {/* SINGLE LINE  */}

      <div className='w-full  border-[#D9D9D9] border-[1px] mb-9'></div  >

      {/* PRODUCTS SEC START */}

      <div>
        <div className='text-4xl font-medium text-center mb-10'>Related Products</div>
      </div>

      <div>
        <ProductCard />
      </div>

      {/* SHOW MORE SEC */}
      <div className="p-6 ">
        <button class="border-2 border-yellow-600 text-yellow-600 font-bold px-16 py-2 flex mx-auto ">
          Show More
        </button>
      </div>

      {/* SINGLE LINE  */}

      <div className='w-full  border-[#D9D9D9] border-[1px] mt-9'></div  >

      {/* FOOTER CODE HERE */}
      FOOTER

    </ >
  )
}

export default Single_product

