import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import TreeConfig from '../hooks/TreeConfig';
import TreeURL from '../hooks/TreeURL';
import clickFeature from '../functions/treeClickHandler';



const wardConfig = require('../mapConfig/wardConfig.json')



export const WebMapView = () => {
  const mapRef = useRef();

  let obj = {
    condition: ['Excellent', 'Good', 'Fair', 'Poor', 'Dead'],
    ward: ['1','2','3','4','5','6','7','8','9'],
  }
  let filteredTrees, condFilter;


  const loadMap = () => {
    // lazy load the required ArcGIS API for JavaScript 
    // modules and CSS
    loadModules([
      'esri/Map', 
      'esri/views/MapView',
      "esri/layers/GeoJSONLayer",
      "esri/widgets/Locate"
    ], { css: true })
    .then(([
      ArcGISMap, 
      MapView, 
      GeoJSONLayer, 
      Locate
    ]) => {
      const map = new ArcGISMap({basemap: 'topo-vector'});
      
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

      var locateBtn = new Locate({
        view: view
      });
      
      // get the ward boundaries
      const wards = new GeoJSONLayer(wardConfig.layer);

      // get all of the trees for the initial load
      const allTrees = new GeoJSONLayer(TreeConfig('getAll'));

      const activeConditions = document.querySelectorAll('.condition');
      let condArr = '*'
      
      const activeWards = document.querySelectorAll('.ward');
      let wardArr = '*'

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
      const filterTrees = (obj) => {
        let config = TreeConfig(`getByParams?CONDITION=${obj.condition.toString()}&WARD=${obj.ward.toString()}`);
        console.log(config)
        filteredTrees = new GeoJSONLayer(config);
        map.add(filteredTrees);
        return 
      };
      const domFilter = () => {
        // poor button event listener
        const filterTypes = (nodeItem) => {
          let type = nodeItem.dataset.type;
          let item = nodeItem.dataset.item;
          let classType = document.querySelectorAll(`.${type}`);
          let activeClass = document.querySelectorAll(`.${type}-on`);
          // find all of the coresponding buttons
          classType.forEach(nodeItem=>{
            nodeItem.classList.add(`${type}-on`);
            nodeItem.checked = true
          });

          nodeItem.addEventListener('click', async function(){
            map.removeAll();
            // if button is turned off, l
            if(obj[type].includes(item)){
              condFilter = cond=>{return cond != item}
              obj[type] = obj[type].filter(condFilter);
            }
            // if button is turned back on add back to list
            else{
              obj[type].push(item);
            }
            
            filterTrees(obj)
            console.log(obj)
          })
          if(activeClass.length == 0){
            console.log('actCond == 0')
            // map.add(allTrees)
            classType.forEach(ni=>{
              ni.classList.add(`${type}-on`);
              ni.checked = true
            })
            return 
          }
        }
        // runs listener functions as map loads
        activeConditions.forEach(nodeItem => filterTypes(nodeItem)) // call all of the filter commands on conditions
        activeWards.forEach(nodeItem => filterTypes(nodeItem)) // call all of the filter commands on wards
      }

      domFilter()
      
      // END OF WARD CONFIG


      map.add(wards)
      map.add(allTrees)
      view.ui.add(locateBtn, {
        position: "top-left"
      });
      });
    }
  
  useEffect(()=>{

    loadMap()
  });

    return (
      <div className="webmap" ref={mapRef}>
      <div >
        </div>
      </div>)
};