import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-center gap-20 w-full">
      <Link href="/" className="btn btn-ghost normal-case text-xl">Inicio</Link>
      <Link href="/device/device" className="btn btn-ghost normal-case text-xl">Equipos</Link>
      <Link href="/order/order" className="btn btn-ghost normal-case text-xl">Ordenes</Link>
      <Link href="/client/client" className="btn btn-ghost normal-case text-xl">Clientes</Link>
      <Link href="/admin/admin" className="btn btn-ghost normal-case text-xl">Usuarios</Link>
    </div>
  )
}

export default Navbar