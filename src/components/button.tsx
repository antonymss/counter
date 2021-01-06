import React from "react";

type ButtonPropsType = {
    name: string
    isDisabled: boolean
    callBack: () => void
}

function Button(props: ButtonPropsType) {
    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <button
            onClick={onClickHandler}
            disabled={props.isDisabled}>
            {props.name}
        </button>
    )
};

export default Button;