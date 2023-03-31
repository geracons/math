import React from 'react'
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
export default function Header() {
  return (
    <div className="h-screen bg-fixed lg:bg-cover bg-[url('/assets/mobilefondo.png')] md:bg-[url('/assets/fondito.jpg')] ">
      <div className='hidden lg:block'>
      <p className='absolute lg:mt-36 lg:top-56 lg:left-80 text-[82px] font-bold'>INSTITUTO DE</p>
      <p className='absolute lg:mt-48 lg:top-60  lg:left-80 lg:ml-10 text-[82px] font-bold'>MATEMATICA</p>
      <p className='absolute lg:mt-60 lg:top-64  lg:left-60 text-[82px] font-bold'>Y ESTADISTICA</p>
      </div>
    <div className="absolute md:hidden">
      <img src="/assets/logo.png" alt="logo" className="relative pl-12 pr-12 pb-0 " />

        <div className="  text-center mt-0 mr-24 ml-24"> 
          <Typography className='rounded-2xl bg-pink p-2 mb-4 text-white text-[26px]'> Matemática    </Typography>
          <Typography className='rounded-2xl bg-pink p-2 mb-4 text-white text-[26px]'> Estadística   </Typography>
          <Typography className='rounded-2xl bg-pink p-2 mb-4  text-white text-[26px]'> Álgebra    </Typography>
          <Typography className='rounded-2xl bg-pink p-2 mb-4 text-white text-[26px]'> Cálculo    </Typography>
        </div>
        
        <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
/>
        <div className='text-center '><ExpandMoreIcon className='text-[60px] text-pink mt-48'  /></div>
    </div>

  </div>

  )
}



/*
<ul className="text-base text-center pt-4  md:float-right md:mr-5 md:mt-6 " >
          <a href="#">
            <li className=" bg-pink  rounded-2xl p-4 pt-5 inline-block m-2 text-[52px] text-white lg:p-2 lg:text-[22px] xl:p-6 xl:text-[26px]" > <a href="https://wa.me/602661162" target={'_blank'}> <FontAwesomeIcon icon={faWhatsapp} className="w-12 inline-block pb-3 md:hidden" />  602611111</a></li>
          </a>

        </ul>

        */