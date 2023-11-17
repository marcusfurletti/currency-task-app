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

  return (
    <div className="hero">
      <div className="container">
        <div className="currencyList">
          {currencyList.map((currency) => (
            <div key={currency.id}>{currency.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
