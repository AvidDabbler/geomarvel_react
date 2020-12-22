import React, { useEffect, useRef, useState } from 'react';
// import ArcGISMap from "@arcgis/core/Map";
// import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
// import MapView from '@arcgis/core/views/MapView';
// import Locate from '@arcgis/core/widgets/Locate';
import { loadModules } from 'esri-loader';
import TreeConfig from '../hooks/TreeConfig';
import {TreeURL} from '../hooks/TreeURL';
import {PageLoadState} from '../hooks/PageLoadState';

// import ward boundaries geojson
const wardConfig = require('../mapConfig/wardConfig.json')

// hoist variables to access outside of WebMapView
let map, view, trees, loadTrees, run

//Placeholder setTreeURL
let setURL;

export async function WebMapView(props) {
  const [ArcGISMap, MapView, GeoJSONLayer, Locate] = await loadModules([
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/GeoJSONLayer', 'esri/widgets/Locate'
  ]);
  const [turl, setTreeURL] = TreeURL();
  const [pageLoaded, setPageLoaded] = PageLoadState();
  const mapRef = useRef();
  // get the ward boundaries
  const wards = new GeoJSONLayer(wardConfig.layer);
  // get all of the trees for the initial load
  let boxes = document.querySelectorAll(`.checkbox`);
  
  var locateBtn = new Locate({view});
  
  run = ()=>{
    map = new ArcGISMap({basemap: 'topo-vector'});
    // load the map view at the ref's DOM node
    view = new MapView({
      map: map,
      container: 'webmap',
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
    // map.add(wards)
    loadTrees();
    view.ui.add(locateBtn, {position: "top-left"});
    setPageLoaded(pageLoaded => !pageLoaded);
  };

  loadTrees = (url) => {
    map.remove(trees)
    // trees = new GeoJSONLayer(TreeConfig(url));
    map.add(trees);
  };

  setURL = setTreeURL

 // run on load and
  useEffect(() => {
    // load base map coponents and ui on page load. Remove trees on rerender.
    !map ? run() : map.remove(trees)

    loadTrees(turl.url)
  },[turl]);

  return (
  
  <div id='webmap' className="webmap" ref={mapRef}>
      
  </div>)
};
export {map, trees, loadTrees, setURL};