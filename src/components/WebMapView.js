import React, { useEffect, useRef } from 'react';
import ArcGISMap from "@arcgis/core/Map";
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import MapView from '@arcgis/core/views/MapView';
import Locate from '@arcgis/core/widgets/Locate';
import TreeConfig from '../hooks/TreeConfig';
import TreeURL from '../hooks/TreeURL';
import CheckListState from '../hooks/ChecklistState';

const wardConfig = require('../mapConfig/wardConfig.json')
let map, view, trees, loadTrees;

export const WebMapView = () => {
  const mapRef = useRef();
  let [checklist, setChecklist] = CheckListState();

  const [treeURL, setTreeURL] = TreeURL();
  let loaded= false;
  
  
  
  
  // get the ward boundaries
  const wards = new GeoJSONLayer(wardConfig.layer);
  // get all of the trees for the initial load
  let boxes = document.querySelectorAll(`.checkbox`);
  
  var locateBtn = new Locate({view: view});
  
  const run = ()=>{
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
    map.add(wards)
    loadTrees();
    view.ui.add(locateBtn, {position: "top-left"});
    loaded = !loaded;
  };

  loadTrees = (treeURL) => {
    trees = new GeoJSONLayer(TreeConfig(treeURL));
    map.add(trees);
  };

 
  useEffect(() => {
    run()
    loadTrees(treeURL)
    
  },[checklist]);

  return (<div id='webmap' className="webmap" ref={mapRef}></div>)
};

export {map, trees, loadTrees}