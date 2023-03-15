import React from "react";

export default function Footer() {
  return (
    <div className=" bg-gray-dark m-0 p-0 w-100 pb-4 sm:pb-2 sm:pt-0 md:text-[16px] lg:h-40 lg:w-100 flex flex-wrap items-center justify-center">
      <div className="flex-grow-1 flex-shrink-1 basis-1/3 h-100">
        <h6 className=" text-pink text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] pl-3 pt-3">
          Términos y <br /> condiciones
        </h6>
        <ul className="text-white pt-2 pl-2 text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          <li className=" list-none  "> 
            <p> lore ipsum </p>
          </li>
          <li className=" list-none ">
            <p> lore ipsum </p>
          </li>
          <li className=" list-none ">
            <p> lore ipsum </p>
          </li>
        </ul>
      </div>
      <div className="flex-grow-1 flex-shrink-1 basis-1/3 h-100">
        <h6 className=" text-pink text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] pl-3 pt-3">
          Contacto <br /> y datos{" "}
        </h6>
        <ul className="text-white pt-2 pl-2 text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          <li className="list-none ">
            <p> contacto@aidpet.com </p>
          </li>
          <li className="list-none ">
            <p> Whatsapp: (54) 93416513305 </p>
          </li>
          <li className="list-none">
            <p> Rosario, Sta Fe. Argentina </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
