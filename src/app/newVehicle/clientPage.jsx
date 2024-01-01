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
      <h1 className='text-3xl font-semibold mt-28'>Criar novo veículo</h1>

      <form
        className='mx-auto p-3 bg-gray-800 rounded-xl max-w-lg flex flex-col gap-3 mt-5 text-black'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Modelo</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Cayenne' {...register("model")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Marca</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Porsche' {...register("brand")} />
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Preço</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='999.999,99' {...register("price")} />
        </div>

        <div className='flex flex-col mt-2 col-span-2'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Cor</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Preto' {...register("color")} />
        </div>

        <div className="flex gap-5">
          <button
            className='w-full py-2 bg-primary text-white text-xl font-semibold shadow-md rounded-md'
            onClick={router.back}
          >Cancelar</button>
          <input
            type='submit'
            className='w-full py-2 bg-accent text-white text-xl font-semibold shadow-md rounded-md cursor-pointer'
            value='Adicionar'
          />
        </div>
      </form>
    </main>
  )
}

export default ClientPage