import React from 'react';

export default function Cards() {
  return (

<section class=" mx-auto bg-gray-dark m-5 ">
  <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg border border-blue">
          <div class="flex flex-col justify-between flex-1 p-6  bg-gray-dark ">
            <div class="flex-1 text-center">
              <a href="#" class="block mt-2">
                <p class="text-white  font-semibold text-neutral-600">Basico</p>
                <p class="text-blue font-semibold text-neutral-600">1 hr / Semana .</p>
                <p class="text-white font-semibold text-neutral-600"> $25 .</p>
                <p class="text-white font-semibold text-neutral-600"> por mes .</p>
                <ul class="text-blue font-semibold text-neutral-600">
                  <li>material incluido</li>
                  <li> clase individual </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg border border-blue">
          <div class="flex flex-col justify-between flex-1 p-6  bg-gray-dark text-center ">
            <div class="flex-1">
              <a href="#" class="block mt-2">
                <p class="text-white font-semibold text-neutral-600">Intensivo</p>
                <p class="text-blue font-semibold text-neutral-600">2 hr / Semana .</p>
                <p class="text-white font-semibold text-neutral-600"> $45 .</p>
                <p class="text-white font-semibold text-neutral-600"> por mes .</p>
                <ul class="text-blue font-semibold text-neutral-600">
                  <li>material incluido</li>
                  <li> clase individual </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg border border-blue">
          <div class="flex flex-col justify-between flex-1 p-6  bg-gray-dark text-center ">
            <div class="flex-1">
              <a href="#" class="block mt-2">
                <p class="text-white font-semibold text-neutral-600">Personalizado</p>
                <p class="text-blue font-semibold text-neutral-600">x hr / Semana .</p>
                <p class="text-white font-semibold text-neutral-600"> Precio especial .</p>                

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
