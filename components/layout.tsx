import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useAppDispatch, useAppSelector } from "../customHooks";
import { checkAuth } from "../redux/actions";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const authToken: string = useAppSelector((store) => store.token);

  useEffect(() => {
    async function checkToken() {
      let token: string | null = localStorage.getItem("token");
      if (!token) token = "";
      await dispatch(checkAuth(token));
      setLoading(false);
    }
    checkToken();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {authToken.length ? <>{children}</> : <>Página de error</>}
    </div>
  );
}
