import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-slate-800 flex justify-center gap-20 w-full">
      <Link href="/" className="btn btn-ghost normal-case text-xl">Inicio</Link>
      <Link href="/device" className="btn btn-ghost normal-case text-xl">Equipos</Link>
      <Link href="/order" className="btn btn-ghost normal-case text-xl">Ordenes</Link>
      <Link href="/client" className="btn btn-ghost normal-case text-xl">Clientes</Link>
      <Link href="/admin" className="btn btn-ghost normal-case text-xl">Usuarios</Link>
    </div>
  )
}

export default Navbar