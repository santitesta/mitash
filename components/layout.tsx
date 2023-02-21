import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useAppDispatch, useAppSelector } from "../customHooks";
import { logout } from "../redux/actions";
import base64url from "base64url";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const tokenStore = useAppSelector((store) => store.token);

  useEffect(() => {
    let authToken: string | null = localStorage.getItem("token");
    if (!authToken) {
      setLoading(false);
      console.log("No token in localStorage");
      return;
    }

    const [headerEncoded, payloadEncoded, signatureEncoded] =
      authToken.split(".");

    const payload = JSON.parse(base64url.decode(payloadEncoded));

    if (payload.exp && Date.now() >= payload.exp * 1000) {
      console.log("Token expired");
      logout();
      setLoading(false);
      return;
    } else if (payload.exp) {
      setToken(authToken);
      setLoading(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (tokenStore.length) setToken(tokenStore);
  }, [tokenStore]);

  return (
    <div className="min-h-screen">
      <Navbar />
      {token.length ? (
        <>{children}</>
      ) : (
        <div className="flex justify-center">
          <h1 className="mt-52 alert alert-info w-auto flex justify-center text-3xl border-3">
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
            Para ver esta sección debe inicar sesión
          </h1>
        </div>
      )}
    </div>
  );
}
