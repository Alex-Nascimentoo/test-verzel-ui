'use client'

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowLeftLong } from "react-icons/fa6"
import { maskPrice } from '@/app/utils/masks'

function ClientPage({ vehicle }) {
  const router = useRouter()

  return (
    <main>
      <section className="container">
        <p
          className='text-3xl font-medium cursor-pointer mb-5'
          onClick={() => router.back()}
        >
          <FaArrowLeftLong
            className='inline-block mr-3'
          />
          Voltar
        </p>

        <div className="grid grid-cols-7 gap-7">
          <div className='col-span-4 bg-pink-400 relative overflow-hidden rounded-xl'>
            <Image
              src={vehicle.photo}
              alt='Vehicle image'
              fill
              className='object-cover'
            />
          </div>

          <div className='col-span-3 flex flex-col gap-32'>
            <div>
              <h1 className='text-4xl font-bold'>{ vehicle.model }</h1>
              <h1 className='text-4xl font-bold'>{ vehicle.brand }</h1>
              <p className='text-xl text-gray'>{`${vehicle.version} · ${vehicle.category} · ${vehicle.year}`}</p>
            </div>

            <div className='min-w-full'>
              <p
                className='font-semibold text-xl'
              >R$<span className='text-4xl'>{ maskPrice(vehicle.price) }</span></p>
              <a
                href="/#"
                className='bg-accent text-white text-2xl text-center font-medium py-2 rounded-md block mt-2 shadow-lg hover:bg-primary duration-[250ms]'>Tenho interesse
              </a>
            </div>
          </div>
        </div>

        <h2 className='text-3xl font-semibold my-7 mb-4'>Informações adicionais</h2>

        <div className="grid grid-cols-4">
          <div className="flex flex-col text-lg font-medium text-gray">
            Motor
            <span className='text-2xl text-primary'>{ vehicle.engine }</span>
          </div>
          
          <div className="flex flex-col text-lg font-medium text-gray">
            Transmissão
            <span className='text-2xl text-primary'>{ vehicle.transmission }</span>
          </div>
          
          <div className="flex flex-col text-lg font-medium text-gray">
            Km rodados
            <span className='text-2xl text-primary'>{ maskPrice(vehicle.km_old) }</span>
          </div>
          
          <div className="flex flex-col text-lg font-medium text-gray">
            Cor
            <span className='text-2xl text-primary'>{ vehicle.color }</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ClientPage