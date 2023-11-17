import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const index: React.FC = () => {
  const [currencyList, setCurrencyList] = useState<Item[]>([
    { id: 1, name: "EUR" },
    { id: 2, name: "PLN" },
    { id: 3, name: "GEL" },
    { id: 4, name: "DKK" },
    { id: 5, name: "CZK" },
    { id: 6, name: "GBP" },
    { id: 7, name: "SEK" },
    { id: 8, name: "USD" },
    { id: 9, name: "RUB" },
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState<Item[]>([]);

  const handleClick = (item: Item) => {
    const isSelected = selectedCurrency.some(
      (currency) => currency.id === item.id
    );

    if (isSelected) {
      setSelectedCurrency((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelectedCurrency((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  };

  return (
    <div className="hero">
      <div className="container">
        <h2 className="title">Seleceted Currencies</h2>
        <div className="selectedCurrencyList">
          {selectedCurrency.map((currency) => (
            <div
              className="currencyItem"
              key={currency.id}
              onClick={() => handleClick(currency)}
            >
              {currency.name}
            </div>
          ))}
        </div>
        <h2 className="title">Currency List</h2>
        <div className="currencyList">
          {currencyList.map((currency) => (
            <div
              className="currencyItem"
              key={currency.id}
              onClick={() => handleClick(currency)}
            >
              {currency.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
