import React from 'react'
import ClientPage from './clientPage'

async function Page({ params, searchParams }) {
  const id = params.id
  const token = searchParams.token

  const vehicle = await fetch(`${process.env.API_URL}/vehicles/${id}`, {
    cache: 'no-store'
  }).then(data => data.json())

  return (
    <ClientPage
      id={id}
      vehicle={vehicle}
      token={token}
    />
  )
}

export default Page