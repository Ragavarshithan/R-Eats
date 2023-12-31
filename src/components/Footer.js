import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">R's Eats</h1>
          <p>
          Welcome to R's-Eats, your ultimate destination for delightful dining experiences delivered right to your doorstep.
           Explore a world of culinary delights curated just for you. Order now and savor every bite! Bon appétit!
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 md:flex flex-wrap justify-between mt-6">
          <div className="mb-4 md:w-1/4 w-full md:pr-4">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul className="py-2 text-sm">
            <li className="py-2 text-sm">Srilanka</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
              <li className="py-2 text-sm">Swiss</li>
            </ul>
          </div>
          <div className="mb-4 md:w-1/4 w-full md:pr-4">
            <h6 className="font-medium text-[#9b9b9b]">Information</h6>
            <ul className="py-2 text-sm">
            <li className="py-2 text-sm">About us</li>
              <li className="py-2 text-sm">FAQ</li>
              <li className="py-2 text-sm">Privacy Policy</li>
              <li className="py-2 text-sm">Terms & Conditions</li>
            </ul>
          </div>
          <div className="mb-4 md:w-1/4 w-full md:pr-2">
            <h6 className="font-medium text-[#9b9b9b]"> Delivery Partners</h6>
            <ul className="py-2 text-sm">
            <li className="py-2 text-sm">Pickme</li>
              <li className="py-2 text-sm">Uber</li>
              <li className="py-2 text-sm">Foodi</li>
              
            </ul>
          </div>
          <div className="mb-4 md:w-1/4 w-full md:pr-4">
            <h6 className="font-medium text-[#9b9b9b]">Customer Services</h6>
            <ul className="py-2 text-sm">
            <li className="py-2 text-sm">Contact us</li>
              <li className="py-2 text-sm">Site Map</li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
