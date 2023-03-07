import * as React from 'react';
import styles from './input.module.css';
import Tooltip from '@mui/material/Tooltip';

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
                <Tooltip title={"Enter at least 5 characters"}>
                    <input className={styles.input}
                           placeholder={this.props.placeholder}
                           id={this.props.id}
                           name={this.props.id}
                           type="text"
                        // @ts-ignore
                           maxLength="5"
                           onKeyPress={(e) => {
                               if (e.key === 'Enter') {
                                   // @ts-ignore
                                   this.props.onSubmit(e.target.value)
                               }
                           }
                           }
                    />
                </Tooltip>


            </>
        );
    };
};