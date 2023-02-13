import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { useAppDispatch, useAppSelector } from "../../customHooks";
import { createOrder, getOrders } from "../../redux/actions";
import { useForm } from "react-hook-form";

const Order = () => {
  const dispatch = useAppDispatch();
  const orders: any = useAppSelector((state) => state.orders);
  const { register, unregister, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    async function loadOrders() {
      // setLoading(true) //TBD
      await dispatch(getOrders());
      // setLoading(false) //TBD
    }
    loadOrders();
  }, []);

  async function onSubmit(data: any): Promise<any> {
    await dispatch(createOrder(data));
    reset();
  }

  return (
    <Layout>
      <Head>
        <title>Usuarios</title>
      </Head>
      <div className="w-full mt-10 flex place-content-center">
        <div className="flex flex-col gap-5 items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-1 gap-2 flex flex-col bg-white border-2 border-black"
          >
            <input
              className="input"
              type="text"
              placeholder="Descripción"
              {...register("description")}
            />
            <input
              className="input"
              type="number"
              placeholder="Número de equipo"
              {...register("deviceId")}
            />
            <input
              className="input bg-green-800 hover:cursor-pointer hover:bg-green-500 hover:text-black"
              type="submit"
              value="Crear órden"
            />
          </form>
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
              {orders?.map((o: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{o.id}</td>
                    <th>Tipo de equipo</th>
                    <td>{o.state}</td>
                    <td>{o.description}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
