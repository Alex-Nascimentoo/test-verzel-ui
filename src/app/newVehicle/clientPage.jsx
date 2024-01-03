'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function ClientPage({ token }) {
  const router = useRouter()

  // const [files, setFiles] = useState()
  const [preview, setPreview] = useState('')

  // let filesInput = useRef()

  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    // console.log(JSON.stringify({...data, picture: preview }))

    fetch(`${process.env.API_URL}/vehicles?token=${token}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, photo: preview })
    })

    router.replace('/')
  }

  function getImg() {
    console.log("first")
    document.getElementById('imgInput').click()
  }

  // useEffect(() => {
  //   console.log('cheguei')
  //   if (!files) return

  //   console.log('entrei')
  //   const imgUrl = URL.createObjectURL(files.files[0])
  //   setPreview(imgUrl)

  //   console.log(imgUrl)

  //   // URL.revokeObjectURL(imgUrl)
  // }, [files])

  return (
    <main className='container mx-auto'>
      {/* <input
            type="file"
            accept='image/jpg'
            className='hidden'
            id="imgInput"
            onInput={e => {
              const imgUrl = URL.createObjectURL(e.target.files[0])
              setPreview(imgUrl)
            }}
            {...register("picture")}
          /> */}

      <h1 className='text-3xl font-semibold mt-28'>Criar novo veículo</h1>

      <form
        className='mx-auto p-3 bg-gray-800 rounded-xl max-w-4xl grid grid-cols-2 gap-3 mt-5 text-black'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className='relative bg-red-400 row-span-4 rounded-2xl shadow-xl overflow-hidden cursor-pointer'
          onClick={getImg}
        >
          {/* <input
            type="file"
            accept='image/jpg'
            className='relative z-50'
            id="imgInput"
            // onChange={e => handleFile(e)}
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles(e.target.files[0])
              }
            }}
            {...register("picture")}
          /> */}
          <input
            type="file"
            accept='image/*'
            className='hidden'
            id="imgInput"
            onInput={e => {
              const imgUrl = URL.createObjectURL(e.target.files[0])
              setPreview(imgUrl)
            }}
            // {...register("picture")}
          />
          <Image
            src={preview}
            alt='img'
            fill
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Marca</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Porsche' {...register("brand")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Modelo</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Cayenne' {...register("model")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Versão</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Turbo GT' {...register("version")} />
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Preço</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="number" placeholder='999.999,99' {...register("price")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Cor</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Azul da meia noite' {...register("color")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Categoria</label>
          {/* <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='SUV' {...register("category")} /> */}
          <select
            className='rounded-md p-1 px-2 shadow-md text-primary text-xl font-semibold bg-[#fff]'
            {...register("category")}
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
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='V8 biturbo' {...register("engine")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Transmissão</label>
          {/* <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="text" placeholder='Automático' {...register("transmission")} /> */}
          <select
            className='rounded-md p-1 px-2 shadow-md text-primary text-xl font-semibold bg-[#fff]'
            {...register("transmission")}
          >
            <option value="automatic">Automático</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Ano</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="number" placeholder='2024' {...register("year")} />
        </div>

        <div className='flex flex-col'>
          <label className='text-primary text-xl font-semibold' htmlFor="">Km rodados</label>
          <input className='rounded-md p-1 px-2 shadow-md focus:outline-none' type="number" placeholder='7.000' {...register("km_old")} />
        </div>

        <button
          className='w-full py-2 bg-primary text-white text-xl font-semibold shadow-md rounded-md'
          onClick={e => {
            e.preventDefault()
            router.replace('/')}
          }
        >Cancelar</button>
        <input
          type='submit'
          className='w-full py-2 bg-accent text-white text-xl font-semibold shadow-md rounded-md cursor-pointer'
          value='Adicionar'
        />
      </form>
    </main>
  )
}

export default ClientPage