import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Mitash</title>
      </Head>
      <div className="flex flex-col place-content-center place-items-center h-screen w-full text-gray-900">
        <h1 className="text-6xl">Mitash</h1>
        <p className="text-xl">Seguimiento interno de equipos</p>
      </div>
    </Layout>
  )
}
