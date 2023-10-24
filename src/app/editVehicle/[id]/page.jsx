import React from 'react'
import ClientPage from './clientPage'

async function Page({ params }) {
  const id = params.id
  const vehicle = await fetch(`${process.env.API_URL}/api/vehicle/${id}`, {
    cache: 'no-store'
  }).then(data => data.json())

  const vType = vehicle.doors !== 0 ? 'car' : 'motorcycle'

  return (
    <ClientPage
      id={id}
      model={vehicle.model}
      brand={vehicle.brand}
      price={vehicle.price}
      color={vehicle.color}
      type={vType}
    />
  )
}

export default Page