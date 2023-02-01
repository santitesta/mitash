import Head from 'next/head'
import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import { getUsers } from '../../redux/actions'

const UsersGrid = () => {

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Usuarios</title>
      </Head>
      <div className='w-full h-full flex place-content-center'>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <th>Tecnico</th>
              <td>Quality Control Specialist@batman</td>
              <td><label className="btn btn-xs btn-circle bg-error">X</label></td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <th>Tecnico</th>
              <td>Desktop Support Technician@batman</td>
              <td><label className="btn btn-xs btn-circle bg-error">X</label></td>
            </tr>
            <tr>
              <td>Claudio Brice Swyre</td>
              <th>Director</th>
              <td>Tax Accountant@batman</td>
              <td><label className="btn btn-xs btn-circle bg-error">X</label></td>
            </tr>
          </tbody>
        </table >
      </div>
    </Layout>
  )
}

export default UsersGrid