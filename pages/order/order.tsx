import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

const Order = () => {
  return (
    <Layout>
      <Head>
        <title>Usuarios</title>
      </Head>
      <div className='w-full mt-10 flex place-content-center'>
        <table className="table">
          <thead>
            <tr>
              <th>Número</th>
              <th>Dispositivo</th>
              <th>Estado</th>
              <th>Detalles</th>
              <th>Repuestos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <th>Freezer</th>
              <td>En reparación</td>
              <td>Bla, bla, bla</td>
              <td>El cosito</td>
            </tr>
          </tbody>
        </table >
      </div>
    </Layout>
  )
}

export default Order