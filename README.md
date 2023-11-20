# Currency Selection App

This project is a simple React application built with [Next.js](https://nextjs.org/) that allows users to select and manage a list of currencies. The main functionality of the app is to display a list of available currencies and allow users to add or remove them from a selected list.

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.

```bash
cd your-project-directory
```

3. Install the project dependencies.

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

4. Run the development server.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open http://localhost:3000 in your browser to see the result.

## Project Structure

The project consists of a single React component named CurrencyTask. This component manages the state of selected currencies and provides a user interface to interact with the available currency list.

### "CurrencyTask" Component

The CurrencyTask component renders a simple UI with two sections: the selected currency list and the available currency list.

The selected currency list displays the currencies that the user has chosen. Each selected currency item includes a delete icon, allowing the user to remove the currency from the selection.

The available currency list displays a list of currencies that the user can choose from. Clicking on a currency item adds it to the selected currency list. If a currency is already selected, clicking on it again removes it from the selection.

## Testing

The application includes some basic tests to ensure that the currency selection functionality works as expected.

I had some problems setting up the test environment. When the Babel file that supports the test was present, it wouldn't allow it to deploy on Vercel.

For that, you'll need to create a file named ".babelrc" in the root directory and add following content:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": ["@babel/plugin-syntax-jsx", "@babel/plugin-transform-react-jsx"]
}
```

After that, you can run the tests using the following command:

```bash
npm test
# or
yarn test
# or
pnpm test
# or
bun test
```
