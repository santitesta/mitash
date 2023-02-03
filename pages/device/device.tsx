import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "../../hookts";
import { getDevices } from "../../redux/actions";

const Device = () => {
  const dispatch = useAppDispatch();
  const devices: any = useAppSelector((state) => state.devices);
  console.log("Devices in tsx: ", devices);

  useEffect(() => {
    async function loadDevices() {
      // setLoading(true) //TBD
      await dispatch(getDevices());
      // setLoading(false) //TBD
    }
    loadDevices();
  }, []);

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
            {devices?.map((d: any) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.serialNumber}</td>
                  <td>{d.type}</td>
                  <td>{d.inCharge.username}</td>
                  <td>{d.owner.name}</td>
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

export default Device;
