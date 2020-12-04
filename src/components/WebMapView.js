import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';


export const WebMapView = () => {
    const mapRef = useRef();

    useEffect(
      () => {
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
            PopupTemplate,
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

          var WardFields = [
            new Field({
              "name": "ObjectID",
              "alias": "ObjectID",
              "type": "oid"
            }), new Field({
              "name": "WARD",
              "alias": "Ward",
              "type": "string"
            })
           ];

          const wards = new GeoJSONLayer({
            url: "https://opendata.arcgis.com/datasets/0ef47379cbae44e88267c01eaec2ff6e_31.geojson",
            fields: WardFields,
            popupEnabled: true,
            popupTemplate: {
              title: "Ward: {WARD}",
              
            }}
            );
         
          map.add(wards)

          return () => {
            if (view) {
              // destroy the map view
              view.destroy();
            }
          };
        });
      }
    );

    return <div className="webmap" ref={mapRef} />;
};