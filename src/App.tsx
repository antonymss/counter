import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display";
import Button from "./components/button";

function App() {
    const MAX_VALUE: number = 5;
    const MIN_VALUE: number = 0;
    const [counter, setCounter] = useState<number>(MIN_VALUE);

    const increment = () => {
        if (counter === MAX_VALUE) return;
        setCounter(counter + 1)
    };

    const reset = () => setCounter(MIN_VALUE);

    return (
        <div className="App">
            <div className="wrapper">
                <Display count={counter} />
                <div className="buttons">
                    <Button
                        name={'increment'}
                        isDisabled={counter === MAX_VALUE}
                        callBack={increment} />

                    <Button
                        name={'reset'}
                        isDisabled={counter === MIN_VALUE}
                        callBack={reset} />
                </div>
            </div>
        </div>
    );
}

export default App;
