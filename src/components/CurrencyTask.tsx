import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
        <h2 className="title">Seleceted Currencies</h2>
        <div className="selectedCurrencyList">
          {selectedCurrency.map((currency) => (
            <div className="currencyItem" key={currency.id}>
              <FontAwesomeIcon
                icon={faX}
                onClick={() => handleClick(currency)}
                className="deleteIcon"
              />
              {currency.name}
            </div>
          ))}
        </div>
        <h2 className="title">Currency List</h2>
        <div className="currencyList" data-testid="currency-list">
          {currencyList.map((currency) => (
            <div
              className="currencyItem"
              key={currency.id}
              onClick={() => handleClick(currency)}
              style={{
                color: selectedCurrency.some((c) => c.id === currency.id)
                  ? "green"
                  : "black",
              }}
              data-testid="currency-item"
            >
              {selectedCurrency.some((c) => c.id === currency.id) && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              {currency.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencyTask;
