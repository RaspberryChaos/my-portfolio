import React, { useEffect, useState } from "react";
import CurrencyRow from "../../components/mini-projects/CurrencyRow";
import styles from "../../styles/CurrencyConverter.module.css";

const CurrencyConverter = (props) => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(null);

  let toAmount = 0;
  let fromAmount = 0;

  //When the amount of either currency input field changes, update the amount in the other currency input field
  if (amount) {
    if (amountInFromCurrency) {
      fromAmount = amount;
      toAmount = amount * exchangeRate;
    } else {
      toAmount = amount;
      fromAmount = amount / exchangeRate;
    }
  }

  const { base, rates } = props.data;

  //Use Data from API call to populate list of currencies, and set initial values for currencies and exchange rate
  useEffect(() => {
    const currencyList = [base, ...Object.keys(rates)];
    setCurrencies(currencyList);
    setFromCurrency(base);
    setToCurrency(currencyList[50]);
    setExchangeRate(rates[currencyList[50]]);
  }, [base, rates]);

  //Update the exchange rate if one of the currencies is changed
  useEffect(() => {
    setExchangeRate(rates[toCurrency]);
  }, [fromCurrency, toCurrency, base, rates]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <div>
      <h1 className="pageTitle">Currency Converter</h1>
      {currencies && fromCurrency && toCurrency && exchangeRate && (
        <div className={styles.container}>
          <h2 className={styles.heading}>Convert</h2>

          <CurrencyRow
            //   currencyList={currencies} Deactivated because API free plan doesn't allow you to change the base currency
            currencyList={["EUR"]}
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

          <h3
            className={styles.rate}
          >{`Current Exchange Rate: 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`}</h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=" + process.env.API_KEY); 
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { data: data } };
}
