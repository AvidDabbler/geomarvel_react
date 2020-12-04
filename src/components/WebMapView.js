import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
// import getTrees from '../hooks/getTrees';
import treeConfig from '../mapConfig/treeConfig';

const wardConfig = require('../mapConfig/wardConfig.json')



export const WebMapView = () => {
  const mapRef = useRef();

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
        center: [-77.03738075521436, 38.89504310519569],
        zoom: 12,
        popup: {
          dockEnabled: true,
          dockOptions: {
            buttonEnabled: false,
            breakpoint: false
          }
        }
      });
      console.log(treeConfig())
      
      const wards = new GeoJSONLayer(wardConfig.layer);
      const trees = new GeoJSONLayer(treeConfig());

      var typeParams = {
        layer: trees,
        view: view,
        field: "DOM_CROP_ACRES",
        legendOptions: {
          title: "Dominant crop in harvested acres by county (2007)"
        }
      };

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

        // Generate a unique value renderer based on the
        // unique values of the DOM_CROPS_ACRES field.
        // The generated renderer creates a visualization,
        // assigning each feature to a category.
        //
        // This resolves to an object containing several helpful
        // properties, including the type scheme, unique value infos,
        // excluded values (if any), and the renderer object

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