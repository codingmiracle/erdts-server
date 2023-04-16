import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import * as React from "react";
import styles from "./charts.module.css"
import {Chart} from "react-chartjs-2";
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from "chart.js";
import ChartStore from "../../src/store/chart.store";
import {color, style} from "@mui/system";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


type Props = {
    title: string,
    chartStore: ChartStore
};

export const ChartComponent = observer((props: Props) => {
    useEffect(() => {
        let timeoutFlag = 0;
        if(!timeoutFlag) {
            timeoutFlag = 1
            setTimeout(()=> {
                props.chartStore.increment()
                timeoutFlag = 0
            }, 100)
        }
    })

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <div className={styles.chart}>
            <h3>{props.title}</h3>
            <Chart type={"line"} data={props.chartStore.getChartdata(props.title)} ></Chart>
            <span style={{color:"#575859"}}>Runtime: {props.chartStore.secondsPassed}</span>
        </div>
    )
})