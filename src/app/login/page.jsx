import React from 'react'
import ClientPage from './clientPage'

function Page({ searchParams }) {
  const route = searchParams.route
  
  return (
    <ClientPage
      route={route}
    />
  )
}

export default Page