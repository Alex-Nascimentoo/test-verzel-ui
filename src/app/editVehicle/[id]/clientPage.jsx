'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function ClientPage({ id, vehicle }) {
  const router = useRouter()

  const [preview, setPreview] = useState(vehicle.photo)

  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    fetch(`${process.env.API_URL}/vehicles/${id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    router.push('/')
  }

  return (
    <main className='container mx-auto'>
      <h1 className='text-3xl font-semibold mt-28'>Editar veículo</h1>

      <form
        className='mx-auto p-3 bg-gray-800 rounded-xl max-w-4xl grid grid-cols-2 gap-3 mt-5 text-black'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className='relative bg-red-400 row-span-4 rounded-2xl shadow-xl cursor-pointer'
        >
          <input
            type="text"
            className='absolute -top-7 focus:outline-none px-2 w-full text-gray bg-transparent'
            placeholder='Img URL...'
            {...register("photo")}
            value={preview}
            onChange={e => setPreview(e.target.value)}
          />

          <Image
            src={preview}
            alt='img'
            fill
            className='object-cover rounded-2xl'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Marca</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="text"
            placeholder='Porsche'
            {...register("brand")}
            defaultValue={vehicle.brand}  
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Modelo</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="text"
            placeholder='Cayenne'
            {...register("model")}
            defaultValue={vehicle.model}
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Versão</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="text"
            placeholder='Cayenne'
            {...register("version")}
            defaultValue={vehicle.version}
          />
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Preço</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="number"
            placeholder='999.999,99'
            {...register("price")}
            defaultValue={vehicle.price}
          />
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Cor</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="text"
            placeholder='Azul da meia noite'
            {...register("color")}
            defaultValue={vehicle.color}
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Categoria</label>
          <select
            className='rounded-md p-1 px-2 shadow-md text-primary text-xl font-semibold bg-[#fff]'
            {...register("category")}
            defaultValue={vehicle.category}
          >
            <option value="hatch">Hatch</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="coupe">Coupé</option>
            <option value="pickup">Caminhonete</option>
            <option value="s_wagon">Perua</option>
            <option value="sports">Esportivo</option>
            <option value="convertible">Conversível</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Motor</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="text"
            placeholder='V8 biturbo'
            {...register("engine")}
            defaultValue={vehicle.engine}
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Transmissão</label>
          <select
            className='rounded-md p-1 px-2 shadow-md text-primary text-xl font-semibold bg-[#fff]'
            {...register("transmission")}
            defaultValue={vehicle.transmission}
          >
            <option value="automatic">Automático</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Ano</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="text"
            placeholder='2024'
            {...register("year")}
            defaultValue={vehicle.year}
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Km rodados</label>
          <input
            className='rounded-md p-1 px-2 shadow-md focus:outline-none'
            type="number"
            placeholder='7.000'
            {...register("km_old")}
            defaultValue={vehicle.km_old}
          />
        </div>

        <button
          className='w-full py-2 bg-primary text-white text-xl font-semibold shadow-md rounded-md'
          onClick={e => {
            e.preventDefault()
            router.replace('/')
          }}
        >Cancelar</button>
        <input
          type='submit'
          className='w-full py-2 bg-accent text-white text-xl font-semibold shadow-md rounded-md cursor-pointer'
          value='Salvar'
        />
      </form>
    </main>
  )
}

export default ClientPage