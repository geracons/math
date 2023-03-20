import React from 'react';

export default function Cards() {
  return (

<section className=" mx-auto bg-gray-dark m-0 ">
  <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative mx-auto max-w-7xl">
      <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border border-pink">
          <div className="flex flex-col justify-between flex-1 p-6  bg-gray-dark ">
            <div className="flex-1 text-center">
              <a href="#" className="block mt-2">
                <p className="text-white  font-semibold text-neutral-600 text-[22px]">Basico</p>
                <p className="text-pink font-semibold text-neutral-600">1 hr / Semana .</p>
                <p className="text-white font-semibold text-neutral-600"> $25 .</p>
                <p className="text-white font-semibold text-neutral-600"> por mes .</p>
                <ul className="text-pink font-semibold text-neutral-600">
                  <li>material incluido</li>
                  <li> clase individual </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border border-pink">
          <div className="flex flex-col justify-between flex-1 p-6  bg-gray-dark text-center ">
            <div className="flex-1">
              <a href="#" className="block mt-2">
                <p className="text-white font-semibold text-neutral-600 text-[22px]">Intensivo</p>
                <p className="text-pink font-semibold text-neutral-600">2 hr / Semana .</p>
                <p className="text-white font-semibold text-neutral-600"> $45 .</p>
                <p className="text-white font-semibold text-neutral-600"> por mes .</p>
                <ul className="text-pink font-semibold text-neutral-600">
                  <li>material incluido</li>
                  <li> clase individual </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border border-pink">
          <div className="flex flex-col justify-between flex-1 p-6  bg-gray-dark text-center ">
            <div className="flex-1">
              <a href="#" className="block mt-2">
                <p className="text-white font-semibold text-neutral-600 text-[22px]">Personalizado</p>
                <p className="text-pink font-semibold text-neutral-600">x hr / Semana .</p>
                <p className="text-white font-semibold text-neutral-600"> Precio especial .</p>                

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   
  )
}
