import React, { useEffect, useState } from "react";
import CurrencyRow from "../../components/mini-projects/CurrencyRow";
import styles from "../../styles/CurrencyConverter.module.css";
import { fetchData } from "../api/currencyConverterAPI";

const CurrencyConverter = (props) => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(null);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    console.log(props.data);
    const currencyList = [props.data.base, ...Object.keys(props.data.rates)];
    setCurrencies(currencyList);
    setFromCurrency(props.data.base);
    setToCurrency(currencyList[50]);
    

    setExchangeRate(props.data.rates[currencyList[50]]);
  }, []);

  useEffect(() => {
    console.log("to", toCurrency, "from", fromCurrency)
    console.log(props.data.rates[toCurrency])
    setExchangeRate(props.data.rates[toCurrency]);
  }, [fromCurrency, toCurrency])

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div>
      <h1 className="pageTitle">Currency Converter</h1>
      <div className={styles.container}>
        <h2 className={styles.heading}>Convert</h2>
        <CurrencyRow
          currencyList={currencies}
          selected={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <div className={styles.equals}>=</div>
        <CurrencyRow
          currencyList={currencies}
          selected={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
       
        <h3 className={styles.rate}>{`Current Exchange Rate: 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`}</h3>
      </div>
    </div>
  );
};

export default CurrencyConverter;

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetchData();

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { data: data } };
}
