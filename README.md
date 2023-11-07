# Hospital Token System

The hospital token system app is a progressive web app (PWA) that allows hospital staff to generate and manage tokens for patients. With its responsive design and offline capabilities, it provides a seamless experience across devices and enables uninterrupted usage even in low or no internet connectivity. The app enhances efficiency and patient flow in hospitals while leveraging the benefits of a PWA for a reliable and accessible user experience.

## Features

1. Token Generation: Hospital staff can generate tokens for patients by entering their name in the provided text field and clicking the "Generate Token" button. Each token is assigned a unique ID and is associated with the patient's name.
2. Token Queue: The app displays a list of generated tokens, showing the token ID and the patient's name. The tokens are listed in the order they were generated, with the earliest token at the top.
3. Calling Next Token: Once a patient has been served, the staff can click the "Call Next Token" button to remove the current token from the queue. This action shifts the queue forward, making the next token the new current token.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

