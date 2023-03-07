import * as React from 'react';
import styles from './charts.module.css'

type Props = {
    title: string
    content: string
    percent : number
};
type State = {

};

export default class CircleBarComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className={styles.chart}>
                <span className="material-icons-sharp">analytics</span>
                <div className={"center"}>
                    <div>
                        <h3>{this.props.title}</h3>
                        <h1>{this.props.content}</h1>
                    </div>
                    <div className={styles.progress}>
                        <svg>
                            <circle className={styles.circle} cx='50%' cy='50%' r='40%' style={{strokeDashoffset: 309 + 2.25*this.props.percent}}></circle>
                        </svg>
                        <div className={styles.percentage}>
                            <p>{this.props.percent}%</p>
                        </div>
                    </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
            </div>
        );
    };
};
