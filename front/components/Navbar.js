import React, { useEffect, useRef } from "react";
import {gsap, Power3} from 'gsap'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Navbar() {

  let navbarSection = useRef(null)

  /*
  useEffect(()=> {
    gsap.from(navbarSection, 1, {opacity: 1, x:390, ease: Power3.easeOut, delay: .1})
  }, [])
*/


  return (
    <div className="">
      
      <div className="w-100 h-16 bg-pink items-center">
       <p className=" text-right text-white text-[28px] relative top-3 right-3"><a href="https://wa.me/34602661162" target="_blank">Contáctanos hoy <WhatsAppIcon fontSize="28px" className="-mt-1"/></a></p>
       <img src="/assets/logo.png" alt="logo" className=" w-60   absolute top-10 left-14   hidden md:block"/> 
       
        
      </div>
    </div>
  );
}
