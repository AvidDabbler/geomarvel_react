import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import getTrees from '../hooks/getTrees';

const wardConfig = require('../mapConfig/wardConfig.json')



export const WebMapView = () => {
  const mapRef = useRef();

  const loadMap = () => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules([
      'esri/Map', 
      'esri/views/MapView',
      "esri/layers/GeoJSONLayer",
      "esri/layers/support/Field",
      
    ], { css: true })
    .then(([
      ArcGISMap, 
      MapView, 
      GeoJSONLayer, 
      Field,
    ]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });
      
      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-77.03738075521436, 38.89504310519569],
        zoom: 12
      });
      
      // const fieldList = (fields) => {
      //     return fields.forEach(field => {
      //       new Field(field)
      //     });
      // }

        // START OF WARD CONFIG

        // var WardFields = fieldList(wardConfig.fields);

        const wards = new GeoJSONLayer(wardConfig.layer);

        // END OF WARD CONFIG
       
        map.add(wards)
        getTrees()

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