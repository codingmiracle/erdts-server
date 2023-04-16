import {RootStore} from "./root.store";
import {action, computed, makeAutoObservable} from "mobx";
import DataService from "../services/data.service";
import {DataDto} from "../dto/data/data.dto";


export default class DataStore {
    temperatures: number[]
    accelarations: number[]
    batteryVoltages: number[]
    timeStamps: number[]
    private dataService: DataService;

    constructor(
    ) {
        this.dataService = new DataService();
        this.temperatures = [];
        this.accelarations = [];
        this.batteryVoltages = [];
        this.timeStamps = [];
        makeAutoObservable(this);
    }

    @computed
    getTimeStamps() {
        return this.timeStamps
    }

    @computed
    getTemperatures() {
        return this.temperatures
    }

    @computed
    async fetch(): Promise<void> {
        await this.dataService.fetch()
            .then((data) => {
                console.log(typeof(data))
                console.log(data)
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