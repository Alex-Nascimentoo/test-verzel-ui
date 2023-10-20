import React from 'react'

function Page() {
  return (
    <main className='container mx-auto'>
      <h1 className='text-3xl md:text-4xl font-semibold mt-28'>Create new vehicle</h1>

      <form
        action=""
        className='mx-auto p-3 bg-gray-800 rounded-xl max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'
      >
        <div className='flex flex-col'>
          <label className='text-white text-xl' htmlFor="">Model</label>
          <input className='rounded-md p-1 px-2 focus:outline-none' type="text" placeholder='Cayenne' name="" id="" />
        </div>

        <div className='flex flex-col'>
          <label className='text-white text-xl' htmlFor="">Brand</label>
          <input className='rounded-md p-1 px-2 focus:outline-none' type="text" placeholder='Porsche' name="" id="" />
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-white text-xl' htmlFor="">Type</label>
          <select className='rounded-md p-1 px-2 focus:outline-none' name="" id="">
            <option value="">Car</option>
            <option value="">Motorcycle</option>
            <option value="">Truck</option>
            <option value="">Aircraft</option>
          </select>
        </div>

        <div className='flex flex-col mt-2'>
          <label className='text-white text-xl' htmlFor="">Price</label>
          <input className='rounded-md p-1 px-2 focus:outline-none' type="number" placeholder='999.999,99' name="" id="" />
        </div>
      </form>
    </main>
  )
}

export default Page