import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "../../customHooks";
import { createDevice, getClients, getDevices } from "../../redux/actions";
import { useForm } from "react-hook-form";

const Device = () => {
  const dispatch = useAppDispatch();
  const devices: any = useAppSelector((state) => state.devices);
  const clients: any = useAppSelector((state) => state.clients);
  const { register, unregister, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    async function loadDevices() {
      // setLoading(true) //TBD
      await dispatch(getDevices());
      await dispatch(getClients());
      // setLoading(false) //TBD
    }
    loadDevices();
  }, []);

  async function onSubmit(data: any): Promise<any> {
    const dto = {
      clientId: data.clientId,
      device: {
        serialNumber: data.serialNumber,
        type: data.type,
      },
    };
    await dispatch(createDevice(dto));
    reset();
  }

  return (
    <Layout>
      <Head>
        <title>Equipos</title>
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
              placeholder="Número de serie"
              {...register("serialNumber")}
            />
            <input
              className="input"
              type="text"
              placeholder="Tipo de equipo"
              {...register("type")}
            />
            <select
              className="select w-full max-w-xs"
              {...register("clientId")}
            >
              <option hidden defaultValue="">
                Dueño
              </option>
              {clients.map((c: any) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
            <input
              className="input bg-green-800 hover:cursor-pointer hover:bg-green-500 hover:text-black"
              type="submit"
              value="Crear usuario"
            />
          </form>
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
              {devices?.map((d: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{d.id}</td>
                    <td>{d.serialNumber}</td>
                    <td>{d.type}</td>
                    <td>{d.inCharge?.username}</td>
                    <td>{d.owner?.name}</td>
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
    </Layout>
  );
};

export default Device;
