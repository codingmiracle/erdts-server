import BaseHttpService from "./base-http.service";
import {SessionDto} from "../dto/session/session.dto";
import {SessionStatusDto} from "../dto/session/session-status.dto";

export default class SessionService extends BaseHttpService {
    async start(sessionDto: SessionDto): Promise<SessionStatusDto> {
        return (await this.post<SessionStatusDto>(
            "/start-session",
            sessionDto
        )) as SessionStatusDto;
    }

    async close(): Promise<void> {
        return (await this.post<void>("/end-session")) as void;
    }
}
