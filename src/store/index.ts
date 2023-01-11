import AuthService from "../services/auth.service";
import UserStore from "./user.store";
import {createContext, useContext} from "react";
import LoginStore from "./login.store";

export class RootStore {
    public userStore: UserStore;
    public loginStore: LoginStore;
    constructor() {
        const authService = new AuthService();
        this.userStore = new UserStore(this, authService);
        this.loginStore = new LoginStore(this);
    }
}

export const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
