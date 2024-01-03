import React from 'react'
import ClientPage from './clientPage'

async function Page({ params }) {
  const id = params.id
  const vehicle = await fetch(`${process.env.API_URL}/vehicles/${id}`, {
    cache: 'no-store'
  }).then(data => data.json())

  return (
    <ClientPage
      id={id}
      vehicle={vehicle}
    />
  )
}

export default Page