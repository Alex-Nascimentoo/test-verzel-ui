import React from 'react'

import ClientPage from './clientPage'

async function Page({ searchParams }) {
  // var vehicleList = await fetch(`${process.env.API_URL}/api/vehicle`, {
  //   method: 'GET',
  //   headers: {
  //     "accept": "application/json",
  //   }
  // }).then(data => data.json())

  const token = searchParams.token

  return (
    <ClientPage
      token={token}
      // vehicleList={vehicleList}
    />
  )
}

export default Page