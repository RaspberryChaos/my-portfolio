import React from 'react';
import { useState } from 'react';


const calculator = () => {

    const reset = () => {
        console.log("reset clicked");
    }

    const percentage = () => {
        console.log("percentage clicked");
    }

    const positiveNegative = () => {
        console.log("positive/negative clicked")
    }

    const inputNumber = (e) => {
        console.log("input number clicked");
    }

    const operator = (e) => {
        console.log("operator clicked");
    }

    const equals = () => {
        console.log("equals clicked");
    }

    const deleteInput = () => {
        console.log("deleteInput clicked");
    }

    return (
        <div>
            <h1>Calculator</h1>
            <div className="wrapper">
                <div className="screen"></div>
            {/* Row 1 */}
                <div className="lightBtn" onClick={reset}>AC</div>
                <div className="lightBtn" onClick={percentage}>%</div>
                <div className="lightBtn" onClick={positiveNegative}>+/-</div>
                <div className="operator" onClick={operator}>/</div>
            {/* Row 2 */}
                <div className="darkBtn" onClick={inputNumber}>7</div>
                <div className="darkBtn" onClick={inputNumber}>8</div>
                <div className="darkBtn" onClick={inputNumber}>9</div>
                <div className="operator" onClick={operator}>*</div>
            {/* Row 3 */}
                <div className="darkBtn" onClick={inputNumber}>4</div>
                <div className="darkBtn" onClick={inputNumber}>5</div>
                <div className="darkBtn" onClick={inputNumber}>6</div>
                <div className="operator" onClick={operator}>+</div>
            {/* Row 4 */}
                <div className="darkBtn" onClick={inputNumber}>1</div>
                <div className="darkBtn" onClick={inputNumber}>2</div>
                <div className="darkBtn" onClick={inputNumber}>3</div>
                <div className="operator" onClick={operator}>-</div>
            {/* Row 5 */}
                <div className="darkBtn" onClick={inputNumber}>0</div>
                <div className="darkBtn" onClick={inputNumber}>.</div>
                <div className="darkBtn" onClick={deleteInput}>C</div>
                <div className="operator" onClick={equals}>=</div>
                
            </div>

        </div>
    )
}

export default calculator

