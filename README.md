# DC Trees React Application

# Project setup

## Tailwind
install tutorial https://daveceddia.com/tailwind-create-react-app/
This method was initially used, but it slowed down the start time so I switched to just having the minified css in the src folder.

## ArcGIS WebPack/Core
### @arcgis/core documenation
- NPM: https://www.npmjs.com/package/@arcgis/core
- github: https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-create-react-app/src
- esri: Using React with the ArcGIS API for JavaScript: https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/using-react-with-the-arcgis-api-for-javascript/
- esri: Using the new webpack plugin for the ArcGIS API for JavaScript: https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/using-the-new-webpack-plugin-for-the-arcgis-api-for-javascript/
- esri: Build with ES modulesBuild with ES modules: https://developers.arcgis.com/javascript/latest/guide/es-modules/
- youtube: https://www.youtube.com/watch?v=C-8im8eEUPQ

### @arcgis/core setup
Install @arcgis/core

 `npm install @arcgis/webpack-plugin @arcgis/core`
 
 copy over the @arcgis/core/assets folder to ./public/assets

in App.css at the top import the arcgis css
`@import "~@arcgis/core/assets/esri/themes/light/main.css";`
