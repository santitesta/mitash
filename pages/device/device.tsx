import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

const Device = () => {
  return (
    <Layout>
      <Head>
        <title>Equipos</title>
      </Head>
      <div className="w-full mt-10 flex place-content-center">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>N° Serie</th>
              <th>Tipo</th>
              <th>A cargo de</th>
              <th>Dueño</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <th>1235125</th>
              <td>Freezer</td>
              <td>Oski</td>
              <td>Tesla</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Device;
