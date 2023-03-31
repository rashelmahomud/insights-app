import Header from "../header";
import Footer from "../footer";
import Glarry from "../home/glarry";
import Head from "next/head";


export default function formate({ children }) {
    return (
        <>
            <Head><title>my-app</title></Head>

            <Header></Header>
            <Glarry />

            <main className="bg-white drop-shadow-2xl lg:mx-20 ">{children}</main>
            <Footer></Footer>
        </>
    )
}