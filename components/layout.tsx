import React from "react";
import Navbar from "./Navbar";
import { useAppSelector } from "../customHooks";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const authToken = useAppSelector((store) => store.token);

  return (
    <div className="min-h-screen">
      <Navbar />
      {authToken.length ? <>{children}</> : <>Página de error</>}
    </div>
  );
}
