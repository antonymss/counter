import React from "react";

type DisplayPropsType = {
    count: number
}

function Display(props: DisplayPropsType) {
    const max = props.count === 5 ? "max" : "";

    return (
        <div className={`display ${max}`}>
            {props.count}
        </div>
    )
};

export default Display;