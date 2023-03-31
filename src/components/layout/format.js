import Header from "../header";
import Footer from "../footer";
import Head from "next/head";


export default function formate({ children }) {
    return (
        <>
            <Head><title>my-app</title></Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}