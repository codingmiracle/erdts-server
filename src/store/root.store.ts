import AuthService from "../services/auth.service";
import UserStore from "./user.store";
import {createContext, useContext} from "react";
import LoginStore from "./login.store";
import SessionStore from "./session.store";
import SessionService from "../services/session.service";

export class RootStore {
    public userStore: UserStore;
    public loginStore: LoginStore;
    public sessionStore: SessionStore;
    constructor() {
        const authService = new AuthService();
        const sessionService = new SessionService();
        this.userStore = new UserStore(this, authService);
        this.loginStore = new LoginStore(this);
        this.sessionStore = new SessionStore(this, sessionService);
    }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
