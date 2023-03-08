import {RootStore} from "./root.store";
import {makeAutoObservable} from "mobx";
import DataService from "../services/data.service";


export default class DataStore {
    temperatures: number[]
    accelarations: number[]
    batteryVoltages: number[]
    timeStamps: number[]

    constructor(
        private readonly rootStore: RootStore,
        private readonly dataService: DataService
    ) {
        this.temperatures = [];
        this.accelarations = [];
        this.batteryVoltages = [];
        this.timeStamps = [];
        makeAutoObservable(this);
    }

    async fetch(): Promise<void> {
        await this.dataService.fetch()
            .then((data) => {
                data.map(d => {
                    this.temperatures.push(d.temperature);
                    this.accelarations.push(d.accelaration);
                    this.batteryVoltages.push(d.battery);
                    this.timeStamps.push(d.timestamp);
                })
            })
            .catch(console.error);
    }
}