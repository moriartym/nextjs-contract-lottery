import LotteryEntrance from "../components/LotteryEntrance"
import Header from "../components/Header"
import Head from "next/head"
// import ManualHeader from "../components/ManualHeader"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
