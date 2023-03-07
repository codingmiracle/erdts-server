// @flow
import * as React from 'react';
import styles from './charts.module.css'

type Props = {
    children: React.ReactNode
};
type State = {};

export default class CardComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className={styles.chart}>
                {this.props.children}
            </div>
        );
    };
};