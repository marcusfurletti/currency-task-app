// CurrencyTask.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrencyTask from "./CurrencyTask";

test("Renders currency list correctly", () => {
  render(<CurrencyTask />);

  // Check if the Currency List is rendered with the correct items
  const currencyList = screen.getByTestId("currency-list");
  expect(currencyList).toBeInTheDocument();

  // Check if all items from the currency list are present
  const currencyItems = screen.getAllByTestId("currency-item");
  expect(currencyItems).toHaveLength(9);
});
