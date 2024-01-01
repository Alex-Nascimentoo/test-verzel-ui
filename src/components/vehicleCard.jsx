'use client'

import React, { useState } from 'react'
import { BiTrash, BiPencil } from 'react-icons/bi'
import Modal from './modal'

function VehicleCard({
  id,
  model,
  brand,
  color,
  price,
  modalFunc
}) {
  async function deleteVehicle() {
    // await fetch(`${process.env.API_URL}/api/vehicle/${id}`, {
    //   method: 'DELETE'
    // })

    // window.location.reload()

    modalFunc(model)
  }

  function handleClick() {
    window.location.replace('/editVehicle/' + id)
  }

  return (
    <div className='bg-white shadow-xl rounded-md px-2 py-3 grid grid-cols-10 text-center text-2xl text-primary font-medium items-center'
      // onClick={handleClick}
    >
      

      <p className='col-span-2 text-left'>{model}</p>

      <p className='col-span-2'>{brand}</p>

      <p className='col-span-3'>{color}</p>

      <p className='col-span-2'>{price}</p>

      <h2
        className='flex justify-center gap-5'
        // onClick={deleteVehicle}
      >
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