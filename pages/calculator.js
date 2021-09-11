import React from 'react';
import { useState } from 'react';
import styles from "../styles/Calculator.module.css";


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
            <h1 className="pageTitle">Calculator</h1>
            <div className={styles.calculatorContainer}>
            <div className={styles.screen}></div>
            <div className={styles.wrapper}>
            {/* Row 1 */}
                <div className={styles.lightButton} onClick={reset}>AC</div>
                <div className={styles.lightButton} onClick={percentage}>%</div>
                <div className={styles.lightButton} onClick={positiveNegative}>+/-</div>
                <div className={styles.operator} onClick={operator}>/</div>
            {/* Row 2 */}
                <div className={styles.darkButton} onClick={inputNumber}>7</div>
                <div className={styles.darkButton} onClick={inputNumber}>8</div>
                <div className={styles.darkButton} onClick={inputNumber}>9</div>
                <div className={styles.operator} onClick={operator}>*</div>
            {/* Row 3 */}
                <div className={styles.darkButton} onClick={inputNumber}>4</div>
                <div className={styles.darkButton} onClick={inputNumber}>5</div>
                <div className={styles.darkButton} onClick={inputNumber}>6</div>
                <div className={styles.operator} onClick={operator}>+</div>
            {/* Row 4 */}
                <div className={styles.darkButton} onClick={inputNumber}>1</div>
                <div className={styles.darkButton} onClick={inputNumber}>2</div>
                <div className={styles.darkButton} onClick={inputNumber}>3</div>
                <div className={styles.operator} onClick={operator}>-</div>
            {/* Row 5 */}
                <div className={styles.darkButton} onClick={inputNumber}>0</div>
                <div className={styles.darkButton} onClick={inputNumber}>.</div>
                <div className={styles.lightButton} onClick={deleteInput}>C</div>
                <div className={styles.operator} onClick={equals}>=</div>
                
            </div>
            </div>
        </div>
    )
}

export default calculator

