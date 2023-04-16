import {action, computed, makeAutoObservable, observable} from "mobx";

export default class ChartStore {
    secondsPassed: number;
    timestamps: number[];
    temp: number[];

    constructor() {
        this.secondsPassed = 0;
        this.timestamps = [];
        this.temp = [];
        makeAutoObservable(this)
    }

    @action
    increment() {
        this.secondsPassed+=0.1;
        this.timestamps = [];
        this.temp = [];
        for(let i = 0; i < 25; i+= 0.1) {
            this.timestamps.push(Math.round(this.secondsPassed+i))
            this.temp.push(Math.sin(i+this.secondsPassed));
        }
    }

    @computed
    getChartdata(title: string) {
        return {
            labels: this.timestamps,
            datasets: [
                {
                    label: title,
                    data: this.temp,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    pointRadius: 0
                },
            ]
        };
    }

}