import React from "react";
import styles from './Login.module.css'

const LoginForm = () => {



    return (
        <div className={styles.signin}>
            <h1 className={styles.title}>Sign In</h1>
            <form>
                <p className={styles.text}>Enter Username and Password</p>
                <input className={styles.input} type="text" placeholder="Username" />
                <input className={styles.input} type="password" placeholder="Password" />
                <input className={styles.input} type="submit" value="Login"/>
                <div className={styles.block}>Don't have an account? <label htmlFor="toggle">Sign Up</label></div>
            </form>
        </div>
    )
}

export default LoginForm;