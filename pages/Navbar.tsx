import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-center gap-20 w-full">
      <Link href="/Admin/Admin" className="btn btn-ghost normal-case text-xl">Usuarios</Link>
      <Link href="/Orders/Orders" className="btn btn-ghost normal-case text-xl">Ordenes</Link>
      <Link href="/Clients/Clients" className="btn btn-ghost normal-case text-xl">Clientes</Link>
    </div>
  )
}

export default Navbar