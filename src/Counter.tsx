import React from 'react';
import {PropsType} from "./App";


export const Counter = (props: PropsType) => {


    return (
        <div><b>Karina's wish counter</b>
            <b><p className={props.title == 10 ? "Red" : "Black"}>{props.title}</p></b>
            <div>
                <button className="Button" onClick={props.addCounter}
                        disabled={props.title == 10 ? true : false}>
                    click
                </button>
                <button className="Button" onClick={props.deleteCounter}
                        disabled={props.title == 0 ? true : false}>
                    reset
                </button>
            </div>
        </div>
    );
};
