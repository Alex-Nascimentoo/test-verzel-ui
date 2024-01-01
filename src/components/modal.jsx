import React from 'react'

function Modal({ classes, modalFunc, vehicle }) {
  async function deleteVehicle() {
    console.log("Delete vehicle")
  }

  function handleCancel() {
    modalFunc('')
  }

  return (
    <div className={`absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-primary bg-opacity-60 flex justify-center items-center ${classes}`}>
      <div className='container bg-white rounded-3xl shadow-lg w-96 py-4 text-center text-2xl'>
        <p className=''>Tem certeza que deseja excluir este veículo?</p>
        <br />
        <p className='font-bold'>{ vehicle }</p>
        <br />

        <div className="flex gap-5">
          <button
            className='w-full py-2 bg-accent text-white text-xl font-semibold shadow-md rounded-md'
            onClick={handleCancel}
          >Cancelar</button>
          <button
            type='submit'
            className='w-full py-2 bg-primary text-white text-xl font-semibold shadow-md rounded-md cursor-pointer'
            onClick={deleteVehicle}
          >Excluir</button>
        </div>
      </div>
    </div>
  )
}

export default Modal