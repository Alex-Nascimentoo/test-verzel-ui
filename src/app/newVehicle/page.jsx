import React from 'react'

import ClientPage from './clientPage'

async function Page() {
  // var vehicleList = await fetch(`${process.env.API_URL}/api/vehicle`, {
  //   method: 'GET',
  //   headers: {
  //     "accept": "application/json",
  //   }
  // }).then(data => data.json())

  return (
    <ClientPage 
      // vehicleList={vehicleList}
    />
  )
}

export default Page