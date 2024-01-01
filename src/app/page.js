import ClientPage from "./clientPage"

export default async function Home() {
  // var vehicleList = await fetch(`${process.env.API_URL}/api/vehicle`, {
  //   method: 'GET',
  //   headers: {
  //     "accept": "application/json",
  //   },
  //   cache: 'no-store'
  // }).then(data => data.json())

  const vehicleList = [
    {
      _id: 1,
      model: "Cayenne",
      brand: "Porsche",
      color: "Midnight Blue",
      price: 300000
    },
    {
      _id: 2,
      model: "Aventador",
      brand: "Lamborghini",
      color: "Lime Green",
      price: 700000
    },
    {
      _id: 3,
      model: "Fastback",
      brand: "Fiat",
      color: "Gray",
      price: 300000
    }
  ]

  return (
    <ClientPage
      vehicleList={vehicleList}
    />
  )
}
