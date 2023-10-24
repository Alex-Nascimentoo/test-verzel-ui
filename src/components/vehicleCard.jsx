'use client'

import React from 'react'

function VehicleCard({
  id,
  model,
  brand,
  color,
  price
}) {
  async function deleteVehicle() {
    await fetch(`${process.env.API_URL}/api/vehicle/${id}`, {
      method: 'DELETE'
    })

    window.location.reload()
  }

  function handleClick() {
    window.location.replace('/editVehicle/' + id)
  }

  return (
    <div className='bg-sky-700 rounded-md p-2 grid grid-cols-8 text-center text-xl sm:text-2xl xl:text-3xl text-white font-semibold items-center cursor-pointer'
      onClick={handleClick}
    >
      <div className='col-span-8 sm:col-span-5 sm:text-left'>
        <h2 className=''>{model} • {color}</h2>
        <p className='text-stone-400 xl:text-2xl'>{brand}</p>
      </div>

      <h2 className='col-span-8 sm:col-span-2'>{price}</h2>

      <h2
        className='col-span-8 sm:col-span-1 cursor-pointer hover:text-red-500 duration-300'
        onClick={deleteVehicle}
      >DELETE</h2>
    </div>
  )
}

export default VehicleCard