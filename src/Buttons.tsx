import React from "react";
import  './App.css'


type ButtonsPropsType = {
    count: number
    maxValue: number
    increment: () => void
    reset: () => void
}
export function Buttons(props: ButtonsPropsType) {
    return (
        <div>
            <button disabled={props.count === props.maxValue}
                    className={"App-incrementButton"}
                    onClick={props.increment}>Inc</button>
            <button disabled={props.count === 0}
                    className={"App-resetButton"}
                    onClick={props.reset}>Reset</button>
        </div>
    )
}