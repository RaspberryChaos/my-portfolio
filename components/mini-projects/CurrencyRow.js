import React from 'react';

const inputStyle = {
    borderRadius: '0.5rem',
    padding: '0.5rem',
    width: '7em',
    fontSize: '1.25rem'
}

const selectStyle = {
    marginLeft: "0.5rem",
    borderRadius: '0.5rem',
    fontSize: '1.25rem',
    padding: "0.5rem 1rem"
}

const CurrencyRow = (props) => {
    const { currencyList, selected, onChangeCurrency, amount, onChangeAmount } = props;
    return (
        <div>
            <input type="number" style={inputStyle} value={amount} onChange={onChangeAmount}/>
            <select value={selected} style={selectStyle} onChange={onChangeCurrency}>
                {currencyList && currencyList.map((currency,i) => (
                    <option key={i} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencyRow;
