import {RootStore} from "./root.store";
import {makeAutoObservable} from "mobx";
import {SessionDto} from "../dto/session/session.dto";
import SessionService from "../services/session.service";

export default class SessionStore {
    session: SessionDto | null;

    constructor(
        private readonly rootStore: RootStore,
        private readonly sessionService: SessionService
    ) {
        this.session = null;
        makeAutoObservable(this);
    }

    async startSession(sessionDto: SessionDto): Promise<void> {
        if(this.session == null) {
            await this.sessionService.start(sessionDto)
                .then(()=>{this.session = sessionDto;})
                .catch(console.error);
        }
    }

    async closeSession(): Promise<void> {
        await this.sessionService.close()
            .then(() => {this.session = null;})
            .catch(console.error)
    }
}
