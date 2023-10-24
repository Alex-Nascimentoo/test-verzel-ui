import ClientPage from "./clientPage"

export default async function Home() {
  var vehicleList = await fetch(`${process.env.API_URL}/api/vehicle`, {
    method: 'GET',
    headers: {
      "accept": "application/json",
    },
    cache: 'no-store'
  }).then(data => data.json())

  return (
    <ClientPage
      vehicleList={vehicleList}
    />
  )
}
