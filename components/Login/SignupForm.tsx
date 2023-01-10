import React from "react";
import styles from './Login.module.css'

const SignupForm = () => {

    return (
        <div className={styles.signup}>
            <h1 className={styles.title}>Create an account</h1>
            <form>
                <p className={styles.text}>Enter info</p>
                <input className={styles.input} type="text" placeholder="Username"/>
                <input className={styles.input} type="email" placeholder="Email"/>
                <input className={styles.input} type="password" placeholder="Password"/>
                <input className={styles.input} type="password" placeholder="Confirm Password"/>
                <input className={styles.input} type="submit" value="Create Account"/>
                <div className={styles.block}>Already have an account? <label htmlFor="toggle">Sign In</label></div>
            </form>
        </div>
    );

}

export default SignupForm;