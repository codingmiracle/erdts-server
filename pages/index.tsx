import Head from 'next/head'
import CircleBarComponent from "../components/charts/circleBar.component";
import InputComponent from "../components/input/input.component";
import ChartComponent from "../components/charts/chart.component";

const Home = () => {

    return (
        <>
            <Head>
                <title>erdts - Beta</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <InputComponent placeholder={"SessionID"} onSubmit={ (msg:string)=> {console.log(msg)} }/>

                <div className="topcontainer">
                    <CircleBarComponent title={"Title"} content={"data datatype"} percent={69}/>
                    <CircleBarComponent title={"Title"} content={"data datatype"} percent={69}/>
                    <CircleBarComponent title={"Title"} content={"data datatype"} percent={69}/>
                </div>


                <div className="grid-container">
                    <div className="grid-item"><ChartComponent title={"Session Health"} data={[]}></ChartComponent></div>
                    <div className="grid-item"><ChartComponent title={"Speed"} data={[]}></ChartComponent></div>
                    <div className="grid-item"><ChartComponent title={"Battery %"} data={[]}></ChartComponent></div>
                    <div className="grid-item"><ChartComponent title={"Data Transfers"} data={[]}></ChartComponent></div>
                </div>






            </main>
        </>
    )
}

export default Home
