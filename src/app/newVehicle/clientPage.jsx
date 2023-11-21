'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

function ClientPage() {
  const router = useRouter()

  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    fetch(`${process.env.API_URL}/api/vehicle`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    router.replace('/')
  }

  return (
    <main className='container mx-auto'>
      <h1 className='text-3xl md:text-4xl font-semibold mt-28'>Create new vehicle</h1>

      <form
        className='mx-auto p-3 bg-gray-800 rounded-xl max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-black'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col'>
          <label className='text-white text-xl' htmlFor="">Model</label>
          <input className='rounded-md p-1 px-2 focus:outline-none' type="text" placeholder='Cayenne' {...register("model")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-white text-xl' htmlFor="">Brand</label>
          <input className='rounded-md p-1 px-2 focus:outline-none' type="text" placeholder='Porsche' {...register("brand")} />
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-white text-xl' htmlFor="">Type</label>
          <select className='rounded-md p-1 px-2 focus:outline-none' {...register("v_type")}>
            <option value="">Car</option>
            <option value="">Motorcycle</option>
            <option value="">Truck</option>
            <option value="">Aircraft</option>
          </select>
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-white text-xl' htmlFor="">Price</label>
          <input className='rounded-md p-1 px-2 focus:outline-none' type="text" placeholder='999.999,99' {...register("price")} />
        </div>

        <div className='flex flex-col mt-2 col-span-2'>
          <label className='text-white text-xl' htmlFor="">Color</label>
          <input className='rounded-md p-1 px-2 focus:outline-none' type="text" placeholder='Black' {...register("color")} />
        </div>

        <input
          type='submit'
          className='col-span-2 mt-2 p-2 rounded-md cursor-pointer bg-sky-700 text-xl text-white'
          value='Create new vehicle'
        />
      </form>
    </main>
  )
}

export default ClientPage