import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { useAppDispatch, useAppSelector } from "../../hookts";
import { getUsers } from "../../redux/actions";

const UsersGrid = () => {
  const dispatch = useAppDispatch();
  const users: any = useAppSelector((state) => state.users);

  useEffect(() => {
    async function loadUsers() {
      // setLoading(true) //TBD
      await dispatch(getUsers());
      // setLoading(false) //TBD
    }
    loadUsers();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Usuarios</title>
      </Head>
      <div className="w-full mt-10 flex place-content-center">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((u: any) => {
              return (
                <tr>
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
    </Layout>
  );
};

export default UsersGrid;
