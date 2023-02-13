import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../components/layout";
import { useAppDispatch, useAppSelector } from "../customHooks";
import { createUser, getUsers } from "../redux/actions";
import { useForm } from "react-hook-form";

const UsersGrid = () => {
  const dispatch = useAppDispatch();
  const users: any = useAppSelector((state) => state.users);
  const { register, unregister, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    async function loadUsers() {
      // setLoading(true) //TBD
      await dispatch(getUsers());
      // setLoading(false) //TBD
    }
    loadUsers();
  }, []);

  async function onSubmit(data: any): Promise<any> {
    await dispatch(createUser(data));
    reset();
  }

  return (
    <Layout>
      <Head>
        <title>Usuarios</title>
      </Head>
      <div className="w-full mt-10 flex place-content-center">
        <div className="flex flex-col gap-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-1 gap-2 flex flex-col bg-white border-2 border-black"
          >
            <input
              className="input"
              type="text"
              placeholder="Nombre de usuario"
              {...register("username")}
            />
            <input
              className="input"
              type="text"
              placeholder="Contraseña"
              {...register("password")}
            />
            <input
              className="input"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            <select className="select w-full max-w-xs" {...register("role")}>
              <option hidden defaultValue="">
                Seleccione su rol
              </option>
              <option value="Tecnico">Tecnico</option>
              <option value="Director">Director</option>
            </select>
            <input
              className="input bg-green-800 hover:cursor-pointer hover:bg-green-500 hover:text-black"
              type="submit"
              value="Crear usuario"
            />
          </form>
          <div className="flex flex-col w-full items-center">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Rol</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((u: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{u.username}</td>
                      <th>{u.role}</th>
                      <td>{u.email}</td>
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

export default UsersGrid;
