import Head from "next/head";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../customHooks";
import { checkAuth, login, logout } from "../redux/actions";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base64url from "base64url";
import Image from "next/image";
import Logo from './../utilities/logoBig.png';

export default function Home() {
  const dispatch = useAppDispatch();
  const { register, unregister, handleSubmit, watch, reset } = useForm();
  const [loading, setLoading] = useState(true);
  const authToken: string = useAppSelector((store) => store.token);

  useEffect(() => {
    async function checkToken() {
      let token: string | null = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        console.log("No token in localStorage");
        return;
      }

      const [headerEncoded, payloadEncoded, signatureEncoded] =
        token.split(".");

      const payload = JSON.parse(base64url.decode(payloadEncoded));

      if (payload.exp && Date.now() >= payload.exp * 1000) {
        // Token has expired
        console.log("Token expired");
        logout();
        setLoading(false);
        return;
      }

      await dispatch(checkAuth(token));
      setLoading(false);
    }
    checkToken();
  }, []);

  async function onSubmit(data: any): Promise<any> {
    await dispatch(login(data));
    reset();
  }

  async function handleLogout(): Promise<any> {
    await dispatch(logout("Cierre de sesión satisfactorio"));
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Head>
        <title>Mitash</title>
      </Head>
      <div className="flex flex-col place-content-center place-items-center h-screen w-full text-gray-900">
      <Image src={Logo} alt="Logo" width={512} height={256}/>
        <ToastContainer />
        {loading ? (
          <Loading />
        ) : authToken?.length ? (
          <button className="btn" onClick={handleLogout}>
            Cerrar sesión
          </button>
        ) : (
          <>
            <label htmlFor="login" className="btn" id="buttonLogin">
              Iniciar sesión
            </label>

            <input type="checkbox" id="login" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box bg-slate-300 w-72 flex place-content-center">
                <label
                  htmlFor="login"
                  className="btn btn-xs btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <form
                  className="flex flex-col gap-3 w-4/5 items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="input bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
                focus:border-blue-200 focus:ring-1 focus:ring-blue-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <input
                    className="input bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
                focus:border-blue-200 focus:ring-1 focus:ring-blue-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    type="password"
                    placeholder="Contraseña"
                    {...register("password")}
                  />
                  <input
                    className="input bg-green-800 hover:cursor-pointer hover:bg-green-500 hover:text-black"
                    type="submit"
                    value="Iniciar sesión"
                  />
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
