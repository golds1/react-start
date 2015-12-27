### set up webstorm dev enviroment for reactjs
npm install react browserify watchify 6to5ify --save-dev


# create output directory and boudle.js

###
watchify -t 6to5ify ./src/index.js -o ./dist/bundle.js -v

#
npm watch

###
### enable auto-watch create package.json file
npm init

            [App configuration and dependencies]
Let's get installing... in the js directory...
### npm init
### npm install --save react
### npm install --save-dev webpack webpack-dev-server
### npm install --save-dev react-hot-loader //deprecated
### npm install html-webpack-plugin --save-dev