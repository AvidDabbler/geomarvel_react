import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import TreeConfig from '../hooks/TreeConfig';
import TreeURL from '../hooks/TreeURL';
import clickFeature from '../functions/treeClickHandler';
import axios from 'axios';


const wardConfig = require('../mapConfig/wardConfig.json')



export const WebMapView = () => {
  const mapRef = useRef();
  const [treeURL, setTreeURL] = TreeURL();

  const loadMap = (treeURL) => { 
    // lazy load the required ArcGIS API for JavaScript 
    // modules and CSS
    loadModules([
      'esri/Map', 
      'esri/views/MapView',
      "esri/layers/GeoJSONLayer",
      "esri/smartMapping/renderers/type",
      "esri/core/watchUtils",
      "esri/renderers/UniqueValueRenderer",
      "dojo/dom",
      "dojo/domReady!"
    ], { css: true })
    .then(([
      ArcGISMap, 
      MapView, 
      GeoJSONLayer, 
      typeRendererCreator,
      watchUtils,
      UniqueValueRenderer,
      dom
    ]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });
      
      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-77.03, 38.89],
        zoom: 12,
        popup: {
          dockEnabled: true,
          dockOptions: {
            buttonEnabled: false,
            breakpoint: false
          }
        }
      });
      
      const wards = new GeoJSONLayer(wardConfig.layer);
      const trees = new GeoJSONLayer(TreeConfig(treeURL));
      

      const generateRenderer = () => {
        // configure parameters for the color renderer generator.
        // The layer must be specified along with a field name
        // The view and other properties determine
        // the appropriate default color scheme.

        var typeParams = {
          layer: trees,
          view: view,
          field: "CONDITION",
          legendOptions: {
            title: "Last known condition of tree"
          }
        };

        typeRendererCreator.createRenderer(typeParams)
          .then(function (response) {
            // set the renderer to the layer and add it to the map

            trees.renderer = response.renderer;

            if (!map.layers.includes(trees)) {
              map.add(trees);
            }
          })
          .catch(function (error) {
            console.error("there was an error: ", error);
          });
      }
      // watchUtils.whenFalseOnce(view, "updating", generateRenderer);

      // start of click event
      // https://totalapis.github.io/sample-code/sandbox/index.html?sample=view-hittest
      view.on("click", (event)=>clickFeature(event, view));


      // access the attributes
      watchUtils.whenFalseOnce(view, "updating", generateRenderer); 

      // END OF WARD CONFIG
      map.add(wards)
      map.add(trees)
      

      // view.constraints = {minZoom: 12};

        return () => {
          if (view) {
            // destroy the map view
            view.destroy();
          }
        };
      });
    }
  const updateData = async () => {
    let json;
    var config = {
        method: 'GET',
        url: `http://localhost:3000/getAll`,
        dataType: "json",
        contentType: "application/json",
    };

    axios(config)
    .then(function (response) {
      console.log(response.data)
      json = response.data;
    }).catch(function (error) {
        console.error(error);
    })
    return await json
};
  
  useEffect(async()=>{
    loadMap(treeURL)
    
  });

    return <div className="webmap" ref={mapRef} />;
};