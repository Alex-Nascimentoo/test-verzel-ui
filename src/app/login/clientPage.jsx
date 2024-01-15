'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

function ClientPage({ route }) {
  const router = useRouter()

  const { register, handleSubmit } = useForm()

  async function onSubmit(data) {
    const token = await fetch(`${process.env.API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)      
    }).then(res => res.json()).then(json => json.token)

    router.replace(`/${route}?token=${token}`)
  }

  return (
    <main className='min-h-screen'>
      <section className="container h-[80vh] flex items-center justify-center">
        <form
          className='flex flex-col gap-3 max-w-sm'
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="">Nome de usuário</label>
          <input
            type="text"
            {...register("username")}
          />

          <label htmlFor="">Senha</label>
          <input
            type="password"
            {...register("password")}
          />

          <input className='bg-accent text-white p-2' type="submit" value="Login" />
        </form>
      </section>
    </main>
  )
}

export default ClientPage