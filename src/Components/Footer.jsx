import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (<footer
  className="bg-zinc-50 text-center text-surface/75 lg:text-left">
  <div
    className="flex items-center justify-center border-neutral-200 p-6 lg:justify-between">

  </div>

  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="">
        <h6
          className="mb-4 italic flex items-center justify-center font-semibold  md:justify-start text-[#1E1E1E] text-3xl ml-24 pb-3">
          
          Wooden Galaxy
        </h6>
        <p className="text-[#1E1E1E] font-semibold ml-24">
        Welcome to Wooden Galaxy, where craftsmanship meets innovation. Discover timeless furniture pieces tailored to your style, only a tap away.
        </p>
      </div>
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold md:justify-start text-[#F6973F] ml-24">
          Services
        </h6>
        <p className="mb-4 text-[#1E1E1E] font-semibold ml-24">
          <Link to={'/Email'}>Email Marketing</Link>
        </p>
        <p className="mb-4 text-[#1E1E1E] font-semibold ml-24">
        <Link to={'/Campaigns'}>Campaigns</Link>
        </p>
        <p className="mb-4 text-[#1E1E1E] font-semibold ml-24">
          <Link to={'/Branding'}>Branding</Link>
        </p>
        
      </div>
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold md:justify-start text-[#F6973F] ml-16">
          Furniture
        </h6>
        <p className="mb-4 text-[#1E1E1E] font-semibold ml-16">
        <Link to={'/Beds'}>Beds</Link>
        </p>
        <p className="mb-4 text-[#1E1E1E] font-semibold ml-16">
          <Link to={'/Chair'}>Chair</Link>
        </p>
        <p className="mb-4 text-[#1E1E1E] font-semibold ml-16">
        <Link to={'/All'}>All</Link>
        </p>
        
      </div>
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold md:justify-start text-[#F6973F]">
          Follow Us
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start font-semibold text-[#1E1E1E] ml-18">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.7357 3.29509H10.5851V0.139742C10.2661 0.0967442 9.16872 0 7.89075 0C5.22424 0 3.39761 1.643 3.39761 4.66274V7.44186H0.455078V10.9693H3.39761V19.845H7.00529V10.9701H9.82881L10.277 7.44269H7.00445V5.01251C7.00529 3.99297 7.28553 3.29509 8.7357 3.29509Z" fill="#1E2833"/>
</svg>
          </span>
          <Link to={'/Facebook'}>Facebook</Link>
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start font-semibold text-[#1E1E1E] ml-18">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2755 1.881C19.5331 2.2 18.7421 2.41144 17.9173 2.51411C18.7658 2.01789 19.4133 1.23811 19.7177 0.298222C18.9267 0.760222 18.0533 1.08656 17.1226 1.26867C16.3715 0.485222 15.3009 0 14.1331 0C11.8673 0 10.0432 1.80156 10.0432 4.01011C10.0432 4.32789 10.0706 4.63344 10.138 4.92433C6.73558 4.76178 3.72492 3.16433 1.70242 0.730889C1.34933 1.331 1.14221 2.01789 1.14221 2.75733C1.14221 4.14578 1.87211 5.37656 2.96009 6.08911C2.30256 6.07689 1.6575 5.88989 1.11102 5.59533C1.11102 5.60756 1.11102 5.62344 1.11102 5.63933C1.11102 7.58756 2.52964 9.20578 4.38994 9.57856C4.0568 9.66778 3.69373 9.71056 3.31693 9.71056C3.05491 9.71056 2.7904 9.69589 2.54211 9.64211C3.07238 11.2298 4.57709 12.397 6.36627 12.4349C4.97385 13.5019 3.20588 14.1448 1.29193 14.1448C0.956306 14.1448 0.634403 14.1301 0.3125 14.0898C2.12539 15.235 4.2739 15.8889 6.59085 15.8889C14.1219 15.8889 18.2392 9.77778 18.2392 4.48067C18.2392 4.30344 18.233 4.13233 18.2243 3.96244C19.0365 3.39778 19.719 2.69256 20.2755 1.881Z" fill="#1E2833"/>
</svg>

          </span>
          <Link to={'/Twitter'}>Twitter</Link>
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start font-semibold text-[#1E1E1E] ml-18">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#1E2833"
          viewBox="0 0 448 512">
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
          </span>
          <Link to={'/Instagram'}>Instagram</Link>
        </p>
        
      </div>
    </div>
  </div>

  <div className="p-6 text-end flex justify-end">
    <span className='mx-16 text-[#1E1E1E] font-semibold'><Link to={'/Terms & Conditions'}>Terms & Conditions</Link></span>
    <p className="font-semibold mr-36 text-[#1E1E1E]" href="https://tw-elements.com/"
      ><Link to={'/Privacy Policy'}>Privacy Policy</Link></p>
  </div>
</footer>
  );
}

export default Footer;
