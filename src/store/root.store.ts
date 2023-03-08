import AuthService from "../services/auth.service";
import UserStore from "./user.store";
import {createContext, useContext} from "react";
import LoginStore from "./login.store";
import SessionStore from "./session.store";
import SessionService from "../services/session.service";
import DataStore from "./data.store";
import DataService from "../services/data.service";

export class RootStore {
    public userStore: UserStore;
    public loginStore: LoginStore;
    public sessionStore: SessionStore;
    public dataStore: DataStore;

    constructor() {
        const authService = new AuthService();
        const sessionService = new SessionService();
        const dataService = new DataService();
        this.userStore = new UserStore(this, authService);
        this.loginStore = new LoginStore(this);
        this.sessionStore = new SessionStore(this, sessionService);
        this.dataStore = new DataStore(this, dataService);
    }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
