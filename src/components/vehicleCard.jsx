import React from 'react'

function VehicleCard() {
  return (
    <div className='bg-sky-700 rounded-md p-2 grid grid-cols-8 text-center text-xl sm:text-2xl xl:text-3xl text-white font-semibold items-center'>
      <div className='col-span-8 sm:col-span-5 sm:text-left'>
        <h2 className=''>Vehicle Model • vehicle color</h2>
        <p className='text-stone-400 xl:text-2xl'>Vehicle Brand</p>
      </div>

      <h2 className='col-span-8 sm:col-span-2'>999.999,99</h2>

      <h2 className='col-span-8 sm:col-span-1'>Icon</h2>
    </div>
  )
}

export default VehicleCard