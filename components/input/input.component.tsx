// @flow
import * as React from 'react';
import styles from './input.module.css';
import {TextField} from "@mui/material";


type Props = {
    placeholder: string;
    onSubmit: Function;
};
type State = {

};

export class InputComponent extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <input className={styles.input} placeholder={this.props.placeholder} color="white" name="text" type="text"/>
            </div>
        );
    };
};

export default InputComponent;