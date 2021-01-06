import React from "react";
import './App.css'

type CountPropsType = {
    count: number
}

export function Count(props: CountPropsType) {

    return (
        <div className={"styleCount"}>
            {props.count}
        </div>
    )
}