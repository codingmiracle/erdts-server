import {RootStore} from "./index";
import {makeAutoObservable, observable} from "mobx";

export default class LoginStore {

    username : string
    email : string
    password : string
    confirmPassword : string

    constructor(private readonly rootStore: RootStore,) {
        makeAutoObservable(this);
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
    }

    initialize() {
        console.log("initLogin")
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
    }
}
