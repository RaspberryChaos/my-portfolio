import React from 'react';
import { useState } from 'react';
import styles from "../styles/Calculator.module.css";


const calculator = () => {

    const [input, setInput] = useState("");
    const [total, setTotal] = useState(0);

    const reset = () => {
        setInput("");
        setTotal(0);
    }

    const percentage = () => {
        console.log("percentage clicked");
    }

    const positiveNegative = () => {
        console.log("positive/negative clicked")
    }

    const inputNumber = (e) => {
        const inputValue = e.target.getAttribute("value");
        if(inputValue === "." && input.includes(".")) return;
        setInput(prev => prev + inputValue);    
    }

    const operator = (e) => {
        const inputOperator = e.target.getAttribute("value");
        const lastInput = input.slice(-1);
        if(lastInput.match(/[*+/-]/)) return;
        setInput(prev => prev + inputOperator); 
    }

    const equals = () => {
        const lastInput = input.slice(-1);
        if (parseInt(lastInput) || parseInt(lastInput) === 0) {
            const result = eval(input);
            setTotal(result);
        }
    }

    const deleteInput = () => {
        const updateInput = input.slice(0,-1);
        setInput(updateInput);
    }

    return (
        <div>
            <h1 className="pageTitle">Calculator</h1>
            <div className={styles.calculatorContainer}>
            <div className={styles.screen}>
                <p className={styles.sum}>{input}</p>
                <p className={styles.total}>{total}</p>
            </div>
            <div className={styles.wrapper}>
            {/* Row 1 */}
                <div className={styles.lightButton} onClick={reset}>AC</div>
                <div className={styles.lightButton} onClick={percentage}>%</div>
                <div className={styles.lightButton} onClick={positiveNegative}>+/-</div>
                <div className={styles.operator} onClick={operator} value="/">/</div>
            {/* Row 2 */}
                <div className={styles.darkButton} onClick={inputNumber} value={7} data-type="number">7</div>
                <div className={styles.darkButton} onClick={inputNumber} value={8} data-type="number">8</div>
                <div className={styles.darkButton} onClick={inputNumber} value={9} data-type="number">9</div>
                <div className={styles.operator} onClick={operator} value="*">*</div>
            {/* Row 3 */}
                <div className={styles.darkButton} onClick={inputNumber} value={4} data-type="number">4</div>
                <div className={styles.darkButton} onClick={inputNumber} value={5} data-type="number">5</div>
                <div className={styles.darkButton} onClick={inputNumber} value={6} data-type="number">6</div>
                <div className={styles.operator} onClick={operator} value="+">+</div>
            {/* Row 4 */}
                <div className={styles.darkButton} onClick={inputNumber} value={1} data-type="number">1</div>
                <div className={styles.darkButton} onClick={inputNumber} value={2} data-type="number">2</div>
                <div className={styles.darkButton} onClick={inputNumber} value={3} data-type="number">3</div>
                <div className={styles.operator} onClick={operator} value="-">-</div>
            {/* Row 5 */}
                <div className={styles.darkButton} onClick={inputNumber} value={0} data-type="number">0</div>
                <div className={styles.darkButton} onClick={inputNumber} value=".">.</div>
                <div className={styles.lightButton} onClick={deleteInput}>C</div>
                <div className={styles.operator} onClick={equals}>=</div>
                
            </div>
            </div>
        </div>
    )
}

export default calculator

