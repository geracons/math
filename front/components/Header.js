import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <div className="h-screen  md:bg-cover bg-fixed md:bg-[url('/img/fondo_principal.jpg')]">
      <div className="absolute md:hidden">
        <img src="/assets/logo.png" alt="logo" className="relative mt-10 pt-28 pl-28 pr-28 pb-0" />
        <div className="  text-center "> <span className='rounded-2xl bg-pink p-2 text-white'> Whats  +34 602661162    </span></div>
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