'use client'

import React, { useMemo, useState } from 'react'

import VehicleCard from '@/components/vehicleCard'
import Modal from '@/components/modal'

function ClientPage(props) {
  const [modalView, setModalView] = useState('hidden')
  const [vehicleDeleting, setVehicleDeleting] = useState('')

  const [filterModel, setFilterModel] = useState('')
  const [filterBrand, setFilterBrand] = useState('')
  const [filterPrice, setFilterPrice] = useState('0')

  const vehicleListFiltered = useMemo(() => {
    const lowerModel = filterModel.toLowerCase()
    const lowerBrand = filterBrand.toLowerCase()

    if (filterPrice === '0') {
      return props.vehicleList
        .filter(vehicle => vehicle.model.toLowerCase().includes(lowerModel))
        .filter(vehicle => vehicle.brand.toLowerCase().includes(lowerBrand))
        .sort((a, b) => a.price - b.price)
    } else {
      return props.vehicleList
        .filter(vehicle => vehicle.model.toLowerCase().includes(lowerModel))
        .filter(vehicle => vehicle.brand.toLowerCase().includes(lowerBrand))
        .filter(vehicle => vehicle.price <= filterPrice)
        .sort((a, b) => a.price - b.price)
    }


  }, [props.vehicleList, filterBrand, filterModel, filterPrice])

  function toggleModalView(vehicle) {
    setVehicleDeleting(vehicle)
    
    if (modalView === 'hidden') {
      setModalView('absolute')
      document.body.classList.add('overflow-y-hidden')
    } else {
      setModalView('hidden')
      document.body.classList.remove('overflow-y-hidden')
    }
  }

  return (
    <main className='container mx-auto'>

      <Modal
        classes={`${modalView}`}
        modalFunc={toggleModalView}
        vehicle={vehicleDeleting}
      />

      <div className='flex justify-between text-xl font-semibold mt-12'>
        <label>
          Modelo <br />
          <input
            type="text"
            className="text-lg px-2 py-1 rounded-lg shadow-md text-primary placeholder:text-gray focus:outline-none"
            id=""
            placeholder='Ex: Cayenne'
            onChange={e => setFilterModel(e.target.value)}
            value={filterModel}
          />
        </label>
        
        <label>
          Marca <br />
          <input
            type="text"
            className="text-lg px-2 py-1 rounded-lg shadow-md text-primary placeholder:text-gray focus:outline-none"
            id=""
            placeholder='Ex: Porsche'
            onChange={e => setFilterBrand(e.target.value)}
            value={filterBrand}
          />
        </label>
        
        <label>
          Preço <br />
          {/* <input
            type="text"
            className="text-lg px-2 py-1 rounded-lg shadow-md text-primary placeholder:text-gray focus:outline-none"
            id=""
            placeholder='Ex: 300.000'
            onChange={e => setFilterPrice(e.target.value)}
          /> */}

          <select
            className="text-lg px-2 py-2 min-w-[15rem] rounded-lg shadow-md bg-[#fff] text-primary placeholder:text-gray focus:outline-none"
            placeholder='Ex: 300.000'
            onChange={e => setFilterPrice(e.target.value)}
            value={filterPrice}
          >
            <option value={'0'}>Selecionar</option>
            <option value={100000}>Até 100.000</option>
            <option value={200000}>Até 200.000</option>
            <option value={300000}>Até 300.000</option>
            <option value={400000}>Até 400.000</option>
            <option value={500000}>Até 500.000</option>
            <option value={600000}>Até 600.000</option>
            <option value={700000}>Até 700.000</option>
          </select>
        </label>
      </div>

      <div className="flex justify-between items-center mt-12 mb-3">
        <h1 className="text-3xl md:text-4xl font-semibold">Veículos disponíveis</h1>

        <a href="/login" className='py-1 px-3 rounded-md shadow-md bg-accent text-white font-semibold text-2xl hover:px-5 hover:bg-primary duration-200'>Adicionar</a>
      </div>

      <div className='grid grid-cols-10 mx-3 px-2 py-2 rounded-lg shadow-xl bg-primary text-white text-3xl font-bold'>
        <p className='col-span-2'>Modelo</p>
        <p className='col-span-2 text-center'>Marca</p>
        <p className='col-span-3 text-center'>Cor</p>
        <p className='col-span-2 text-center'>Preço</p>
        <p className='col-span-1 text-center'>Editar</p>
      </div>

      <div className="mt-2 px-3 flex flex-col gap-4 h-[35rem] max-h-[30rem] overflow-y-scroll ">
        {
          vehicleListFiltered.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.id}
              id={vehicle.id}
              vehicle={vehicle}
              modalFunc={toggleModalView}
            />
          ))
        }
      </div>
    </main>
  )
}

export default ClientPage