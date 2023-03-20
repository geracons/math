import React, { useEffect, useRef } from "react";
import {gsap, Power3} from 'gsap'

export default function Navbar() {

  let navbarSection = useRef(null)

  /*
  useEffect(()=> {
    gsap.from(navbarSection, 1, {opacity: 1, x:390, ease: Power3.easeOut, delay: .1})
  }, [])
*/
  return (
    <div className="">
      <div className="w-100 h-0">
       
       <img src="/assets/logo.png" alt="logo" className=" w-20 ml-10 mt-2 absolute md:mt-0 md:w-40 md:pl-3 lg:w-60 lg:pl-3 hidden md:block"/> 
        <ul className="text-base text-center pt-4  md:float-right md:mr-5 md:mt-6 " >
          <a href="#">
            <li className=" bg-pink  rounded-2xl p-2 inline-block m-2 text-white lg:p-2 lg:text-[22px] xl:p-6 xl:text-[26px]" >CLASES</li>
          </a>
          <a href="#">
            <li className=" bg-pink rounded-2xl p-2 m-2 inline-block text-white lg:p-2 lg:text-[22px] xl:p-6 xl:text-[26px]">PRECIO</li>
          </a>
          <a href="#">
            <li className=" bg-pink rounded-2xl p-2 m-2 inline-block text-white lg:p-2 lg:text-[22px] xl:p-6 xl:text-[26px]">CONTACTO</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
