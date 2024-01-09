'use client'

import React from 'react'
import { BiTrash, BiPencil } from 'react-icons/bi'
import { maskPrice } from '@/app/utils/masks'

function VehicleCard({
  id,
  vehicle,
  modalFunc
}) {
  async function deleteVehicle() {
    modalFunc(vehicle)
  }

  function handleClick() {
    window.location.replace('/editVehicle/' + id)
  }

  return (
    <div className='bg-white shadow-xl rounded-md px-2 py-3 grid grid-cols-10 text-center text-2xl text-primary font-medium items-center'
    >
      <p className='col-span-2 text-left'>{vehicle.model}</p>

      <p className='col-span-2'>{vehicle.brand}</p>

      <p className='col-span-3'>{vehicle.color}</p>

      <p className='col-span-2'>{maskPrice(vehicle.price)}</p>

      <h2 className='flex justify-center gap-5'>
        <BiPencil
          className='hover:text-accent duration-200 cursor-pointer text-3xl'
          onClick={handleClick}
        />

        <BiTrash
          className='hover:text-accent duration-200 cursor-pointer text-3xl'
          onClick={deleteVehicle}
        />
      </h2>
    </div>
  )
}

export default VehicleCard