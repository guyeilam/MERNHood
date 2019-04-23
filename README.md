> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# MernHood

[Robinhood](www.robinhood.com) inspired & MERN-stack powered mock-trading platform.

#### _MERN STACK_

- [MongoDB](https://www.mongodb.com/) : Document database – used by your back-end application to store its data as JSON (JavaScript Object Notation) documents
- [Express](https://expressjs.com/): Back-end web application framework running on top of Node.js
- [React](https://reactjs.org/): a JavaScript library developed by Facebook to build interactive/reactive user interfaces.
- [Node.js](https://nodejs.org/en/) : JavaScript runtime environment – lets you implement your application back-end in JavaScript

#### File Structure

```bash
├── README.md
├── app.js
├── config
├── frontend
│   ├── .storybook
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
│     ├── actions
│     │   └── session_actions.js
│     ├── components
│     │   ├── app.js
│     │   ├── library
│     │   ├── main
│     │   ├── main.css
│     │   ├── nav
│     │   ├── reset.css
│     │   ├── root.js
│     │   └── session
│     ├── index.css
│     ├── index.js
│     ├── logo.svg
│     ├── reducers
│     │   ├── errors_reducer.js
│     │   ├── root_reducer.js
│     │   ├── session_api_reducer.js
│     │   ├── session_errors_reducer.js
│     │   └── session_reducer.js
│     ├── serviceWorker.js
│     ├── store
│     │   └── store.js
│     ├── stories
│     │   └── index.js
│     ├── storybook.test.js
│     ├── styles
│     │   ├── global.css
│     │   └── reset.css
│     └── util
│         ├── route_util.js
│         └── session_api_util.js
├── models
├── node_modules
├── package-lock.json
├── package.json
├── routes
└── validation
```

---

## Available Scripts inside ./frontend

In the frontend directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
