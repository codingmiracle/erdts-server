// @flow
import * as React from 'react';
import CircleBarComponent from "../charts/circleBar.component";
import ChartComponent from "../charts/chart.component";
import InputComponent from "../input/input.component";
import CardComponent from "../charts/card.component";
import {Button} from "@mui/material";
import styles from './panel.module.css'

type Props = {};
type State = {
    inSession: boolean
};

export default class PanelComponent extends React.Component<Props, State> {

    state = {
        inSession: false
    }

    tokenInputId = "token"
    onTokenSubmit = (token: string) => {
        console.log(token);
        this.setState(state => ({
            inSession: true
        }))
    }

    render() {
        return (
            <>
                {this.state.inSession ? (
                    <>
                        <div className="flex-container">
                            <CircleBarComponent title={"Title"} content={"data datatype"} percent={69}/>
                            <CircleBarComponent title={"Title"} content={"data datatype"} percent={69}/>
                            <CircleBarComponent title={"Title"} content={"data datatype"} percent={69}/>
                        </div>


                        <div className="grid-container">
                            <div className="grid-item"><ChartComponent title={"Temperature"} data={[]}/></div>
                            <div className="grid-item"><ChartComponent title={"Accelaration"} data={[]}/></div>
                            <div className="grid-item"><ChartComponent title={"Battery Voltage"} data={[]}/>
                            </div>
                            <div className="grid-item"><CardComponent>
                                <div>...</div>
                            </CardComponent></div>
                        </div>
                    </>
                ) : (
                    <CardComponent>
                        <div className={styles.cardBlock}>
                            <h3>Start a new Session:</h3>
                            The token is a 5-digit string shown on the display
                        </div>
                        <div className={styles.inputContainer}>
                            <InputComponent placeholder={"token"} onSubmit={this.onTokenSubmit} id={this.tokenInputId}/>
                            <Button variant={"contained"} size={"large"} style={{
                                borderRadius: "1rem",
                                fontFamily: "monospace",
                                background: "#7380ec",
                            }} onClick={() => {
                                let token = document.getElementById(this.tokenInputId).value
                                this.onTokenSubmit(token);
                            }}>
                                start
                            </Button>
                        </div>
                    </CardComponent>)}
            </>
        );
    };
};