import Head from "next/head";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loading Spinner</title>
        <meta name="description" content="A simple loading spinner in Next.js" />
      </Head>
      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <LoadingSpinner color="#0ca2de" size="large" text="EC"/>
      </div> */}
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner color="#0ca2de" size="large" text="EC"/>
      </div>
    </>
  );
}


