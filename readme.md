[vMUSE](http://vr-react-museum.herokuapp.com/)
---------------------------------------------------
![vmuse](https://cloud.githubusercontent.com/assets/7112158/22572424/f05f5a62-e958-11e6-8001-e4a79bd89a71.gif)

Explore art from around the world in VR by creating your own collection of art from the J. Paul Getty Museum and Rijksmuseum in the Netherlands. View high-resolution images of art in 2D and then jump into your own virtual gallery where you can see all your art with different 360° background.

### View art exclusive art from around the world
![viewart](https://cloud.githubusercontent.com/assets/7112158/22572514/56f21c2e-e959-11e6-9375-0938e5f0a047.gif)

### Create a collection and add image to collection
![addtocollection](https://cloud.githubusercontent.com/assets/7112158/22572695/2e4fcda6-e95a-11e6-8c5e-ef756eb81545.gif)

### View all collections in VR with just a single click
![vrmode](https://cloud.githubusercontent.com/assets/7112158/22573082/1291ee44-e95c-11e6-8189-5a82784e54b4.gif)

# Created by

* [Parinaz Khosraviani] (https://github.com/parinaz77)
* [Laura Reynolds] (https://github.com/lrrnlds)
* [Christian Acuña] (https://github.com/christian-acuna)
* [John Winslow] (https://github.com/john-winslow)
* [Ashley Humphrey] (https://github.com/Von-Ashley)

# Link to repositories

* [Aframe-React Web App] (https://github.com/parinaz77/aframe-react-boilerplate)
* [Rails 5 API] (https://github.com/christian-acuna/vr-museum-api)

## Install

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm run build` and run `git push heroku development:master`

## Structure

Root Directory
* `Procfile` - for heroku
* `client` - where source code for app lives (see below for details)
* `devServer.js` - server for development
* `dist` - distribution folder, npm run buld cleans and generates this folder
* `index.html` - main HTML page
* `node_modules` - third-party libraries managed by package.json and npm
* `package.json` - config file for npm and holds various metadata relevant to the project
* `prodServer.js` - production server used on heroku
* `readme.md`
* `webpack.config.dev.js` - development webpack config
* `webpack.config.prod.js` - production webpack config


client folder
* `actions` - action creators are stored here
* `components` - React components
* `helpers` - helper function for authentication (login/logout) using local storage
* `main.js` - entry point for React app, where the routes are defined, store is imported
* `reducers` - reducers are created here and combined in index.js
* `store.js` - creation of store with middleware and enhancers
* `styles` - stylesheets imported in main.js

## Contribute

Visit development [Trello board](https://trello.com/b/LiRzwONW/vr-museum) or email christian.miguel.acuna@gmail.com

![Trello Development](https://cloud.githubusercontent.com/assets/7112158/22575009/bb1a62c0-e967-11e6-8b37-c60babd7c31e.png)
