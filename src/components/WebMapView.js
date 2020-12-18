import React, { useEffect, useRef } from 'react';
// import { loadModules } from 'esri-loader';
import ArcGISMap from "@arcgis/core/Map";
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import MapView from '@arcgis/core/views/MapView';
import Locate from '@arcgis/core/widgets/Locate';
import TreeConfig from '../hooks/TreeConfig';
import TreeURL from '../hooks/TreeURL';
import clickFeature from '../functions/treeClickHandler';



const wardConfig = require('../mapConfig/wardConfig.json')



export const WebMapView = () => {
  const mapRef = useRef();
  const [treeURL, setTreeURL] = TreeURL();
  let filteredTrees, condFilter, map, view, trees;
  let loaded= false;
  let obj = {
    condition: ['Excellent', 'Good', 'Fair', 'Poor', 'Dead'],
    ward: ['1','2','3','4','5','6','7','8','9'],
  }
  
  

  // get the ward boundaries
  const wards = new GeoJSONLayer(wardConfig.layer);
  // get all of the trees for the initial load
  
  var locateBtn = new Locate({view: view});
  
  const loadMap = () => {

      const checkboxes = document.querySelectorAll('.checkbox');

      // access the attributes called on every render
      function getGraphics(response, coor) {
        // the topmost graphic from the click location
        // and display select attribute values from the
        // graphic to the user
        var graphic = response.results[0].graphic;
        var attributes = graphic.attributes;
        var condition = attributes.condition;
        
      }

      // set up domFilter to return lists of elements on click from all categories
      // const filterTrees = (obj) => {
        
      //   let config = TreeConfig(`${process.env.REACT_APP_API_HOST}/getByParams?CONDITION=${obj.condition.toString()}&WARD=${obj.ward.toString()}`);
      //   trees = new GeoJSONLayer(config);
      //   map.add(trees);
      //   return 
      // };
      
      // // poor button event listener
      // const filterTypes = (nodeItem) => {
      //   let type = nodeItem.dataset.type;
      //   let item = nodeItem.dataset.item;
      //   let classType = document.querySelectorAll(`.checkbox`);
      //   let activeClass = document.querySelectorAll(`.${type}-on`);
      //   // find all of the coresponding buttons
      //   classType.forEach(nodeItem=>{
      //     nodeItem.classList.add(`${type}-on`);
      //     nodeItem.checked = true
      //   });

      //   nodeItem.addEventListener('click', async function(){
      //     map.remove(trees);
      //     // if button is turned off, l
      //     if(obj[type].includes(item)){
      //       condFilter = cond=>{return cond != item}
      //       obj[type] = obj[type].filter(condFilter);
      //     }
      //     // if button is turned back on add back to list
      //     else{
      //       obj[type].push(item);
      //     }
          
      //     filterTrees(obj)
      //     console.log(obj)
      //   })
      //   if(activeClass.length == 0){
      //     console.log('actCond == 0')
      //     // map.add(allTrees)
      //     classType.forEach(ni=>{
      //       ni.classList.add(`${type}-on`);
      //       ni.checked = true
      //     })
      //     return 
      //   }
      // }
      // runs listener functions as map loads
      
      // checkboxes.forEach(nodeItem => filterTypes(nodeItem)) // call all of the filter commands on conditions
      
      // END OF WARD CONFIG


      
    }
    const run = ()=>{
      map = new ArcGISMap({basemap: 'topo-vector'});
      // load the map view at the ref's DOM node
      view = new MapView({
        map: map,
        container: mapRef.current,
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
      loadTrees();
      map.add(wards)
      map.add(trees)
      view.ui.add(locateBtn, {position: "top-left"});
      loaded = true;
    };

    const loadTrees = () => {
      console.log('updateTrees');
      trees = new GeoJSONLayer(TreeConfig(`${process.env.REACT_APP_API_HOST}/${treeURL}`));
      map.remove(trees);
      map.add(trees);

    }
    
    useEffect(()=>{
      loaded ? loadTrees() : run()
    },[treeURL]);
    return (
      <div className="webmap" ref={mapRef}>

      </div>)
};