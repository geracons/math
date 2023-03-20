import React from 'react'

export default function Collage() {
  return (
    <div>

<div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 mt-2">
  <div>
    <img src="/assets/11.jpg" alt="" loading="lazy" />
  </div>
  <div className="col-start-3">
    <img src="/assets/55.jpg" alt="" loading="lazy" />
  </div>
  <div>
    <img src="/assets/33.jpg" alt="" loading="lazy" />
  </div>
  <div>
    <img src="/assets/44.jpg" alt="" loading="lazy" />
  </div>
  <div className="row-start-1 col-start-2 col-span-2">
    <img src="/assets/22.jpg" alt="" loading="lazy" />
  </div>
</div>




    </div>
  )
}
