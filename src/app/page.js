import VehicleCard from "@/components/vehicleCard"

export default function Home() {
  return (
    <main className='container mx-auto'>
      <h1 className="text-3xl md:text-4xl font-semibold mt-28">Available vehicles</h1>

      <div className="bg-gray-800 mt-2 py-4 px-3 rounded-xl flex flex-col gap-4 max-h-[35rem] overflow-y-scroll">
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>
    </main>
  )
}
