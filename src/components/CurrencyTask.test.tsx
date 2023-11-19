// CurrencyTask.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrencyTask from "./CurrencyTask";

// Tests cover:
// 1. Renders currency list correctly;
// 2. Shows currency item on the selected list when clicked;
// 3. Removes currency item from the selected list when clicked;
// 4. Removes currency item from the selected list when delete icon is clicked;
// 5. Clicked currency item will have white background;
// 6. Allow clicking on multiple currency items in the currency list.

test("Renders currency list correctly", () => {
  render(<CurrencyTask />);

  const currencyList = screen.getByTestId("currency-list");
  expect(currencyList).toBeInTheDocument();

  const currencyItems = screen.getAllByTestId("currency-item");
  expect(currencyItems).toHaveLength(9);
});

test("Shows currency item on the selected list when clicked", () => {
  render(<CurrencyTask />);

  const currencyItem = screen.getAllByTestId("currency-item")[0];
  fireEvent.click(currencyItem);

  const selectedCurrencyList = screen.getByTestId("selected-currency-list");
  expect(selectedCurrencyList).toBeInTheDocument();

  const selectedCurrencyItem = screen.getByTestId("selected-currency-item-1");
  expect(selectedCurrencyItem).toBeInTheDocument();
});

test("Removes currency item from the selected list when clicked", () => {
  render(<CurrencyTask />);

  const currencyItem = screen.getAllByTestId("currency-item")[0];
  fireEvent.click(currencyItem);

  const selectedCurrencyItem = screen.getByTestId("selected-currency-item-1");
  expect(selectedCurrencyItem).toBeInTheDocument();

  fireEvent.click(currencyItem);

  expect(selectedCurrencyItem).not.toBeInTheDocument();
});

test("Removes currency item from the selected list when delete icon is clicked", () => {
  render(<CurrencyTask />);

  const currencyItem = screen.getAllByTestId("currency-item")[0];
  fireEvent.click(currencyItem);

  const selectedCurrencyItem = screen.getByTestId("selected-currency-item-1");
  expect(selectedCurrencyItem).toBeInTheDocument();

  const deleteIcon = screen.getByTestId("delete-icon");
  fireEvent.click(deleteIcon);

  expect(selectedCurrencyItem).not.toBeInTheDocument();
});

test("Clicked currency item will have white background", () => {
  render(<CurrencyTask />);

  const currencyItem = screen.getAllByTestId("currency-item")[0];
  fireEvent.click(currencyItem);

  expect(currencyItem).toHaveStyle("background-color: white");
});

test("Allow clicking on multiple currency items in the currency list", () => {
  render(<CurrencyTask />);

  const currencyItem1 = screen.getAllByTestId("currency-item")[0];
  const currencyItem2 = screen.getAllByTestId("currency-item")[1];

  fireEvent.click(currencyItem1);
  fireEvent.click(currencyItem2);

  const selectedCurrencyItem1 = screen.getByTestId("selected-currency-item-1");
  const selectedCurrencyItem2 = screen.getByTestId("selected-currency-item-2");

  expect(selectedCurrencyItem1).toBeInTheDocument();
  expect(selectedCurrencyItem2).toBeInTheDocument();
});

test("X appears on the checkbox when clicked", () => {
  render(<CurrencyTask />);

  const currencyItem = screen.getAllByTestId("currency-item")[0];
  fireEvent.click(currencyItem);

  const xIcon = screen.getByTestId("checkbox-x");

  expect(xIcon).toBeInTheDocument();
});
