import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

const Clients = () => {
  return (
    <Layout>
      <Head>
        <title>Clientes</title>
      </Head>
      <div className='w-full h-full flex place-content-center'>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Dirección</th>
              <th>Sucursal</th>
              <th>Horario</th>
              <th>CUIT</th>
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
              <td>Cy Ganderton</td>
              <td>Cy Ganderton</td>
              <td>Cy Ganderton</td>
              <th>Tecnico</th>
              <td>Quality Control Specialist@batman</td>
              <td><label className="btn btn-xs btn-circle bg-error">X</label></td>
            </tr>
          </tbody>
        </table >
      </div>
    </Layout>
  )
}

export default Clients