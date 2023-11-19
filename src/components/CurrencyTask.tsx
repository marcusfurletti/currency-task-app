import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const CurrencyTask: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Item[]>([]);
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
        <div
          className="selectedCurrencyList"
          data-testid="selected-currency-list"
        >
          {selectedCurrency.map((currency, index) => (
            <div
              className="selectedCurrencyItem"
              key={currency.id}
              data-testid={`selected-currency-item-${index + 1}`}
            >
              <div
                className="deleteIconContainer"
                data-testid="delete-icon"
                onClick={() => handleClick(currency)}
              >
                <p>X</p>
              </div>
              <div className="currencyName">{currency.name}</div>
            </div>
          ))}
        </div>
        <div className="currencyList" data-testid="currency-list">
          {currencyList.map((currency) => (
            <div
              className="currencyItem"
              key={currency.id}
              onClick={() => handleClick(currency)}
              style={{
                backgroundColor: selectedCurrency.some(
                  (c) => c.id === currency.id
                )
                  ? "white"
                  : "",
              }}
              data-testid="currency-item"
            >
              <div className="checkBox">
                {selectedCurrency.some((c) => c.id === currency.id) && (
                  <p data-testid="checkbox-x">X</p>
                )}
              </div>
              {currency.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencyTask;
