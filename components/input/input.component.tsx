import * as React from 'react';
import styles from './input.module.css';

type Props = {
    placeholder: string;
    onSubmit: Function;
    id: string
};
type State = {};

export default class InputComponent extends React.Component<Props, State> {
    render() {
        return (
            <>
                <input className={styles.input}
                       placeholder={this.props.placeholder}
                       id={this.props.id}
                       name={this.props.id}
                       type="text"
                       onKeyPress={(e) => {
                           if (e.key === 'Enter') {
                               // @ts-ignore
                               this.props.onSubmit(e.target.value)
                           }
                       }
                       }
                />


            </>
        );
    };
};