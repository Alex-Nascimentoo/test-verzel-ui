import React from 'react'

import ClientPage from './clientPage'

async function Page({ searchParams }) {
  const token = searchParams.token

  return (
    <ClientPage
      token={token}
    />
  )
}

export default Page