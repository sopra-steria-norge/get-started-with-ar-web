# get-started-with-ar-on-the-web

Welcome! 👋

## About this repository

This is the project repository for the Medium post ["Get started with Augmented Reality on the web using WebXR and Three.js"](https://medium.com/sopra-steria-norge/get-started-with-augmented-reality-on-the-web-using-three-js-and-webxr-part-1-8b07757fc23a).

The `main` branch contains the project starter code, which is intended for use together with the written guide in the post.

The `complete` branch contains the full completed project code, with some added comments to explain key points.

## Running the app

To get up and running, clone the repo and run the following commands to install dependencies and start the app using [localtunnel](https://github.com/localtunnel/localtunnel).

    npm install
    npm start:live

This will install the app dependencies, start an instance of webpack-dev-server and expose the local web server to the internet using. The localtunnel URL will be printed to your terminal.

## A note on debugging

As the app is running on a mobile device, you won't be able to easily access the devtools directly in the mobile browser. For development and debugging, attach the device to your machine using a cable and access the url `chrome://inspect/#devices` in your desktop version of Chrome. Allow debug access when prompted on your device. You should then be able to see your device appear in the inspection window you opened earlier, where you can use the `inspect` functionality to get access to the running app instance for debugging.

## Credits

Thanks to [*Poly by Google*](https://poly.pizza/m/fzCu8FM0HfB) for the Koala model.
