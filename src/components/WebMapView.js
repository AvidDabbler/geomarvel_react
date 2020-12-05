import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import TreeConfig from '../hooks/TreeConfig';
import TreeURL from '../hooks/TreeURL';


const wardConfig = require('../mapConfig/wardConfig.json')



export const WebMapView = () => {
  const mapRef = useRef();
  const [treeURL, setTreeURL] = TreeURL();

  const loadMap = () => {
    // lazy load the required ArcGIS API for JavaScript 
    // modules and CSS
    loadModules([
      'esri/Map', 
      'esri/views/MapView',
      "esri/layers/GeoJSONLayer",
      "esri/smartMapping/renderers/type",
      "esri/core/watchUtils",
    ], { css: true })
    .then(([
      ArcGISMap, 
      MapView, 
      GeoJSONLayer, 
      typeRendererCreator,
      watchUtils
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

        typeRendererCreator
          .createRenderer(typeParams)
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
      watchUtils.whenFalseOnce(view, "updating", generateRenderer);

      // END OF WARD CONFIG
      map.add(wards)
      
      map.add(trees)

      view.constraints = {minZoom: 12};

        return () => {
          if (view) {
            // destroy the map view
            view.destroy();
          }
        };
      });
    }
  
  useEffect(
    loadMap,
    );

    return <div className="webmap" ref={mapRef} />;
};