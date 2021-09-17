import React from 'react';
import { useState, useEffect } from 'react';
import styles from "../../styles/Calculator.module.css";


const calculator = () => {

    const [prevNumber, setPrevNumber] = useState("");
    const [currentNumber, setCurrentNumber] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    useEffect(() => {
        setInput(currentNumber)
    }, [currentNumber]);

    useEffect(() => {
        setInput("0")
    }, []);

    const reset = () => {
        setPrevNumber("");
        setCurrentNumber("");
        setInput("0");
        setOperator(null);
        setTotal(false);
    }

    const inputNumber = (e) => {
        const inputValue = e.target.getAttribute("value");
            
        if(currentNumber.includes(".") && inputValue === ".") return;
        
        if(total) {
            setPrevNumber("");
        }
        currentNumber ? setCurrentNumber(prev => prev + inputValue) : setCurrentNumber(inputValue);
        setTotal(false);
    }

    const inputOperator = (e) => {
        setTotal(false);
        setOperator(e.target.getAttribute("value"));
        if (currentNumber === "") return;
        if (prevNumber !== "") {
            equals();
        } else {
            setPrevNumber(currentNumber);
            setCurrentNumber("")
        }
    }

    const equals = (e) => {
        
        if(e?.target.innerText === "=") {
            setTotal(true);
        }
        let calc;
        switch (operator) {
          case "/":
            calc = String(parseFloat(prevNumber) / parseFloat(currentNumber));
            break;
          case "+":
            calc = String(parseFloat(prevNumber) + parseFloat(currentNumber));
            break;
          case "*":
            calc = String(parseFloat(prevNumber) * parseFloat(currentNumber));
            break;
          case "-":
            calc = String(parseFloat(prevNumber) - parseFloat(currentNumber));
            break;
          default:
            return;
        }
        setInput("");
        setPrevNumber(calc);
        setCurrentNumber("");
    }

    const clearInput = () => {
        // if(!input) return;
        // const updateInput = input.slice(0,-1);
        // setInput(updateInput);
        // setTotal(0);
    }

    const percentage = () => {
        console.log("percentage clicked");
        prevNumber ? setCurrentNumber(String(parseFloat(currentNumber) / 100 * prevNumber)):
        setCurrentNumber(String(parseFloat(currentNumber) / 100));
    }

    const positiveNegative = () => {
        console.log("positive/negative clicked");
        if(currentNumber.charAt(0) === "-") {
            setCurrentNumber(currentNumber.substring(1));
        } else {
            setCurrentNumber("-" + currentNumber);
        }
    }

    return (
        <div>
            <h1 className="pageTitle">Calculator</h1>
            <div className={styles.calculatorContainer}>
            <div className={styles.screen}>
                <p className={styles.total}> {input !== "" || input === "0" ? input : prevNumber }</p>

            </div>
            <div className={styles.wrapper}>
            {/* Row 1 */}
                <div className={styles.lightButton} onClick={reset}>AC</div>
                <div className={styles.lightButton} onClick={percentage}>%</div>
                <div className={styles.lightButton} onClick={positiveNegative}>+/-</div>
                <div className={styles.operator} onClick={inputOperator} value="/">/</div>
            {/* Row 2 */}
                <div className={styles.darkButton} onClick={inputNumber} value={7}>7</div>
                <div className={styles.darkButton} onClick={inputNumber} value={8}>8</div>
                <div className={styles.darkButton} onClick={inputNumber} value={9}>9</div>
                <div className={styles.operator} onClick={inputOperator} value="*">*</div>
            {/* Row 3 */}
                <div className={styles.darkButton} onClick={inputNumber} value={4}>4</div>
                <div className={styles.darkButton} onClick={inputNumber} value={5}>5</div>
                <div className={styles.darkButton} onClick={inputNumber} value={6}>6</div>
                <div className={styles.operator} onClick={inputOperator} value="+">+</div>
            {/* Row 4 */}
                <div className={styles.darkButton} onClick={inputNumber} value={1}>1</div>
                <div className={styles.darkButton} onClick={inputNumber} value={2}>2</div>
                <div className={styles.darkButton} onClick={inputNumber} value={3}>3</div>
                <div className={styles.operator} onClick={inputOperator} value="-">-</div>
            {/* Row 5 */}
                <div className={styles.darkButton} onClick={inputNumber} value={0}>0</div>
                <div className={styles.darkButton} onClick={inputNumber} value=".">.</div>
                <div className={styles.lightButton} onClick={clearInput}>C</div>
                <div className={styles.operator} onClick={equals}>=</div>
                
            </div>
            </div>
        </div>
    )
}

export default calculator

