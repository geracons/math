import React from "react";
export default function Navbar() {
  return (
    <div className="">
      <div className="w-100 h-0">
       
       <img src="/assets/logo.png" alt="logo" className="w-20 ml-10 mt-10 absolute md:w-40 md:pl-3 lg:w-60 lg:pl-3 "/> 
        
        <ul className="text-base float-right mr-5 mt-6 ">
          <a href="/users/login">
            <li className=" bg-pink  rounded-2xl p-2 inline-block m-3 text-white lg:p-4 lg:text-[22px] xl:p-6 xl:text-[26px]" >INGRESÁ</li>
          </a>
          <a href="/users/register">
            <li className=" bg-pink rounded-2xl p-2 inline-block text-white lg:p-4 lg:text-[22px] xl:p-6 xl:text-[26px]">REGISTRO</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
