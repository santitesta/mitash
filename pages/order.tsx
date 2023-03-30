import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../components/layout";
import { useAppDispatch, useAppSelector } from "../customHooks";
import {
  assignEmployee,
  createOrder,
  getOrders,
  getUsers,
} from "../redux/actions";
import { useForm } from "react-hook-form";

const Order = () => {
  const dispatch = useAppDispatch();
  const orders: any = useAppSelector((state) => state.orders);
  const employees: any = useAppSelector((state) => state.employees);
  const { register, unregister, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    async function loadOrders() {
      // setLoading(true) //TBD
      await dispatch(getOrders());
      await dispatch(getUsers());
      // setLoading(false) //TBD
    }
    loadOrders();
  }, []);

  async function onSubmit(data: any): Promise<any> {
    await dispatch(createOrder(data));
    reset();
  }

  async function handleEmployeeAssign(e: any) {
    await dispatch(
      assignEmployee({
        orderId: Number(e.target.value),
        employeeId: Number(e.target.id),
      })
    );
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
                <th>A cargo de</th>
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
                    <td>
                      <label
                        htmlFor="employeeAssign"
                        className="btn"
                        id="buttonEmployeeAssign"
                      >
                        {o.employee === null ? "Asignar" : o.employee.username}
                      </label>

                      <input
                        type="checkbox"
                        id="employeeAssign"
                        className="modal-toggle"
                      />

                      <div className="modal">
                        <div className="modal-box bg-slate-300 w-auto flex place-content-center">
                          <label
                            htmlFor="employeeAssign"
                            className="btn btn-xs btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          {employees.length ? (
                            <ul className="menu bg-base-100 w-auto m-6 rounded-box">
                              {employees.map((e: any, index: number) => {
                                return (
                                  <li key={index}>
                                    <button
                                      id={e.id}
                                      value={o.id}
                                      onClick={(e) => handleEmployeeAssign(e)}
                                    >
                                      {e.username}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <li>
                              <div className="alert alert-warning shadow-lg">
                                <div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                  </svg>
                                  <span>
                                    No se pueden mostrar los empleados
                                  </span>
                                </div>
                              </div>
                            </li>
                          )}
                        </div>
                      </div>
                    </td>
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
