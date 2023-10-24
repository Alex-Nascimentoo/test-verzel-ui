import React from 'react'

import VehicleCard from '@/components/vehicleCard'

function ClientPage(props) {
  return (
    <main className='container mx-auto'>
      <h1 className="text-3xl md:text-4xl font-semibold mt-28">Available vehicles</h1>

      <div className="bg-gray-800 mt-2 py-4 px-3 rounded-xl flex flex-col gap-4 max-h-[35rem] overflow-y-scroll">
        {
          props.vehicleList.map((v, index) => (
            <VehicleCard
              key={v._id.$oid}
              id={v._id.$oid}
              model={v.model}
              brand={v.brand}
              color={v.color}
              price={v.price}
            />
          ))
        }
      </div>
    </main>
  )
}

export default ClientPage