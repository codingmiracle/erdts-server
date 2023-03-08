import BaseHttpService from "./base-http.service";
import DataDto from "../dto/data/data.dto";

export default class DataService extends BaseHttpService {
    async fetch(limit: number): Promise<DataDto> {
        return (await this.get<DataDto>(
            "/data"
        )) as DataDto;
    }
}