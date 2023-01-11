import React, {useEffect, useState} from "react";
import styles from './auth.module.css'
import {observer} from "mobx-react-lite";
import {useStores} from "../../src/store";


interface LoginFormProps {
    defaulttype: string;
}

const LoginForm = observer(function LoginForm({defaulttype} : LoginFormProps) {

    const [state, setState] = useState(defaulttype)

    const { loginStore } = useStores();

    const login = (event : any) => {
        console.log(loginStore);
    }

    const register = (values : any) => {
        console.log(loginStore);
    }

    useEffect(() => {
        // componentWillUnmount
        return () => {
            loginStore.initialize();
        }
    }, []);

    if( state=="login") {
        return (
            <div className={styles.signin}>
                <h1 className={styles.title}>Sign In</h1>
                <div>
                    <p className={styles.text}>Enter Username and Password</p>
                    <input className={styles.input} type="text" placeholder="Username" onChange={(event => {loginStore.username = event.target.value})}/>
                    <input className={styles.input} type="password" placeholder="Password" onChange={(event => {loginStore.password = event.target.value})}/>
                    <button className={styles.submit} onClick={login}>Login</button>
                    <div className={styles.block}>Don't have an account? <label onClick={() => {setState("signup")}}>Sign Up</label></div>
                </div>
            </div>
        );
    } else if(state == "signup") {
        return (
            <div className={styles.signup}>
                <h1 className={styles.title}>Create an account</h1>
                <div>
                    <p className={styles.text}>Enter info</p>
                    <input className={styles.input} type="text" placeholder="Username" onChange={(event => {loginStore.username = event.target.value})}/>
                    <input className={styles.input} type="email" placeholder="Email" onChange={(event => {loginStore.email = event.target.value})}/>
                    <input className={styles.input} type="password" placeholder="Password" onChange={(event => {loginStore.password = event.target.value})}/>
                    <input className={styles.input} type="password" placeholder="Confirm Password" onChange={(event => {loginStore.confirmPassword = event.target.value})}/>
                    <button className={styles.submit} onClick={register}>Create Account</button>
                    <div className={styles.block}>Already have an account? <label onClick={() => {setState("login")}}>Sign In</label></div>
                </div>
            </div>
        );
    }
    return null;
})

export default LoginForm;