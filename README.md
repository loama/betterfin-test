# Betterfin Test
This is a financial app that allows users to see their transactions.

Built for an interview with [Betterfin](betterfin.com)

## Motivating Questions:
- **Why would a business owner be interested in coming to this page?**

  To be able to check out all their banking transactions and act on them.

- **How does the page lead to a concrete action for the business owner?**

  He will be able to:
    - find any transaction easily with the search and ordering functionalities.
    - Export his data in his preferred format (pdf, json, csv)
    - Act on any transaction or merchant, do charge backs, integrate with zapier, unsubscribe, contact merchant and much more.


- **How is the page personalized for the business owner?**
  The page has all his transactions and an account section, in the future we could also add his company logo.

- **How can the business owner take action?**
  By clicking on any transaction, that will open the transaction modal with all the available actions

- **How does the page distill the information into an important insight?**
  By ordering, searching and the table view the business owner will be able to see his transactions in many different ways and understand them differently.

  Two key things we should add in the future are filtering and charts.

# Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Capabilities

This project contains:

- Capacitor Project with vuejs
  - webapp
  - electron desktop app
  - ios app
  - android app


- Cloud Function for serving the data
  [https://us-central1-betterfin-test.cloudfunctions.net/helloWorld](https://us-central1-betterfin-test.cloudfunctions.net/helloWorld)
