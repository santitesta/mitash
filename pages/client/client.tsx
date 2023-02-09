import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { createClient, getClients } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../customHooks";
import { useForm } from "react-hook-form";

const Client = () => {
  const dispatch = useAppDispatch();
  const clients: any = useAppSelector((state) => state.clients);
  const { register, unregister, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    async function loadClients() {
      // setLoading(true) //TBD
      await dispatch(getClients());
      // setLoading(false) //TBD
    }
    loadClients();
  }, []);

  async function onSubmit(data: any): Promise<any> {
    await dispatch(createClient(data));
    reset();
  }

  return (
    <Layout>
      <Head>
        <title>Clientes</title>
      </Head>
      <div className="w-full mt-10 flex place-content-center">
        <div className="flex flex-col gap-5 w-full items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-1 gap-2 flex w-2/5 bg-white border-2 border-black place-content-center"
          >
            <div className="flex flex-col gap-2">
              <input
                className="input"
                type="text"
                placeholder="Nombre de cliente"
                {...register("name")}
              />
              <input
                className="input"
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              <input
                className="input"
                type="text"
                placeholder="Empresa"
                {...register("company")}
              />
              <input
                className="input"
                type="text"
                placeholder="Dirección"
                {...register("address")}
              />
              <input
                className="input"
                type="number"
                placeholder="Teléfono"
                {...register("phone")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                className="input"
                type="text"
                placeholder="Horario"
                {...register("openTime")}
              />
              <input
                className="input"
                type="number"
                placeholder="CUIT"
                {...register("cuit")}
              />
              <input
                className="input"
                type="string"
                placeholder="Email de pagos"
                {...register("paymentEmail")}
              />
              <input
                className="input"
                type="string"
                placeholder="Teléfono tesorería"
                {...register("treasuryPhone")}
              />
              <input
                className="input bg-green-800 hover:cursor-pointer hover:bg-green-500 hover:text-black"
                type="submit"
                value="Crear cliente"
              />
            </div>
          </form>
          <div className="flex flex-col w-full items-center">
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
        </div>
      </div>
    </Layout>
  );
};

export default Client;
