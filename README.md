# CSV to DynamoDB converter
Simple webpage to convert exported CSV data to DynamoDB Put script.

## Index

- [CSV to DynamoDB converter](#csv-to-dynamodb-converter)
  - [Index](#index)
  - [Getting Started](#getting-started)
  - [CSV Format](#csv-format)
  - [Stack Base](#stack-base)

## Getting Started
- Clone this repository to your local machine.
- Go to the root directory and install its dependencies.
> npm install or yarn
- Once the dependencies are installed, you can run the application:
> npm start or yarn start
- Set the table name you want to add the data.
- Set the CSV content into the field.
- Press _Convert CSV_ button

## CSV Format
Make sure your CSV has the *headers* of your Table:
```
"Pk (S)", "Sk (S)", "Name (S)", "Amount (N)"
"Pk-1234", "Sk-item", "Database", "5"
```

## Stack Base
Technology  | Reference
--- | ---
TypeScript | https://www.typescriptlang.org/
React | https://reactjs.org/
Webpack | https://webpack.js.org/
SASS | https://github.com/sass/node-sass/