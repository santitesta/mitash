import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

const Client = () => {
  return (
    <Layout>
      <Head>
        <title>Clientes</title>
      </Head>
      <div className='w-full mt-10 flex place-content-center'>
        <table className="table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Sucursal</th>
              <th>Email de pago</th>
              <th>Teléfono de pago</th>
              <th>Email de tesorería</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Cy Ganderton</td>
              <td>Cy Ganderton</td>
              <td>Cy Ganderton</td>
              <th>Tecnico</th>
              <td>Quality Control Specialist@batman</td>
              <td>Quality Control Specialist@batman</td>
            </tr>
          </tbody>
        </table >
      </div>
    </Layout>
  )
}

export default Client