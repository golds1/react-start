
Webstorm dev enviroment for reactjs
=======

Basic setup
---
npm install react browserify watchify 6to5ify --save-dev

### create output directory and boudle.js
watchify -t 6to5ify ./src/index.js -o ./dist/bundle.js -v

### webpack, babel, webpack-dev-server


            [App configuration and dependencies]

* npm init
* npm install --save react
* npm install --save-dev webpack webpack-dev-server
* npm install --save-dev react-hot-loader //deprecated
* npm install --save-dev html-webpack-plugin