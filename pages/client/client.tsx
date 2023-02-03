import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { getClients } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../hookts";

const Client = () => {
  const dispatch = useAppDispatch();
  const clients: any = useAppSelector((state) => state.clients);

  useEffect(() => {
    async function loadClients() {
      // setLoading(true) //TBD
      await dispatch(getClients());
      // setLoading(false) //TBD
    }
    loadClients();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Clientes</title>
      </Head>
      <div className="w-full mt-10 flex place-content-center">
        <table className="table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            {clients?.map((c: any) => {
              return (
                <tr>
                  <td>{c.company}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  {/* <td>
                    TBD User Deletion
                    <label className="btn btn-xs btn-circle bg-error">X</label>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Client;
