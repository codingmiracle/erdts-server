// @flow
import * as React from 'react';
import {Chart} from "react-chartjs-2";
import styles from "./charts.module.css";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';

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
    data: number[],
    timestamps: number[]
};
type State = {};


export default class ChartComponent extends React.Component<Props, State> {

    render() {
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: this.props.title,
                },
            },
        };
        const data = {
            labels: this.props.timestamps,
            datasets: [
                {
                    label: this.props.title,
                    data: this.props.timestamps.map((index) => this.props.data[index]),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ]
        };
        return (
            <div className={styles.chart}>

                <Chart type={"line"} data={data} options={options}></Chart>
            </div>
        );
    };
};