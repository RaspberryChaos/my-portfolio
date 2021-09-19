import React, { useEffect, useState } from "react";
import CurrencyRow from "../../components/mini-projects/CurrencyRow";
import styles from "../../styles/CurrencyConverter.module.css";
import { fetchData } from "../api/currencyConverterAPI";

const CurrencyConverter = (props) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    setCurrencies(props.data);
  }, []);

  return (
    <div>
      <h1 className="pageTitle">Currency Converter</h1>
      <div className={styles.container}>
        <h2 className={styles.heading}>Convert</h2>
        <CurrencyRow currencyList={currencies} />
        <div className={styles.equals}>=</div>
        <CurrencyRow currencyList={currencies} />
        <h2></h2>
      </div>
    </div>
  );
};

export default CurrencyConverter;

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetchData();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { data: data } };
}
