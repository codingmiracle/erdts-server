// @flow
import * as React from 'react';
import CircleBarComponent from "../charts/circleBar.component";
import InputComponent from "../input/input.component";
import CardComponent from "../charts/card.component";
import {Button} from "@mui/material";
import {BackbuttonComponent} from "./backbutton.component";
import {stat} from "fs";
import {ChartComponent} from "../charts/chart.component";
import ChartStore from "../../src/store/chart.store";


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
        console.log("token", token);
        this.setState(state => ({
            inSession: true
        }))
    }


    onBackPress = (e) => {
        this.setState(state => ({
            inSession: false
        }))
    }


    render() {
        const ts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <>
                {this.state.inSession ? (
                    <>


                        <div className="flex-container">

                            <BackbuttonComponent onClick={this.onBackPress}> </BackbuttonComponent>

                        </div>


                        <div className="flex-container">
                            <CircleBarComponent title={"Title"} content={"Content"} percent={50}/>
                            <CircleBarComponent title={"Accelaration"} content={"80%"} percent={80}/>
                            <CircleBarComponent title={"Battery Voltage"} content={"45%"} percent={45}/>
                        </div>


                        <div className="grid-container">
                            <div className="grid-item"><ChartComponent title={"Temperature"}
                                                                       chartStore={new ChartStore()}/></div>
                            <div className="grid-item"><ChartComponent title={"Title"}
                                                                       chartStore={new ChartStore()}/></div>
                            <div className="grid-item"><ChartComponent title={"Battery Voltage"}
                                                                       chartStore={new ChartStore()}/></div>
                            <div className="grid-item"><CardComponent>
                                <div>...</div>
                            </CardComponent></div>
                        </div>
                    </>
                ) : (
                    <CardComponent>

                        <div className="card-block">
                            <h3>Start a new Session:</h3>
                            The token is a 5-digit string shown on the display
                        </div>
                        <div className="input-container">

                            <InputComponent placeholder={"token"} onSubmit={this.onTokenSubmit} id={this.tokenInputId}/>
                            <Button variant={"contained"} size={"large"} style={{
                                borderRadius: "1rem",
                                fontFamily: "monospace",
                                background: "#7380ec",
                            }} onClick={() => {

                                // @ts-ignore

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