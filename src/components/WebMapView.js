import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import TreeConfig from '../hooks/TreeConfig';
import TreeURL from '../hooks/TreeURL';
import clickFeature from '../functions/treeClickHandler';


const wardConfig = require('../mapConfig/wardConfig.json')



export const WebMapView = () => {
  const mapRef = useRef();
  let treeURL = 'getAll'
  let conditionList = ['Excellent', 'Good', 'Fair', 'Poor'];
  const wardList = [1,2,3,4,5,6,7,8,9];
  let filteredTrees, condFilter;


  const loadMap = () => {
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
      const allTrees = new GeoJSONLayer(TreeConfig('getAll'));
      const activeConditions = document.querySelectorAll('.condition-on');
      const activeWards = document.querySelectorAll('.ward-on');

      
      const generateRenderer = (layer) => {
        // configure parameters for the color renderer generator.
        // The layer must be specified along with a field name
        // The view and other properties determine
        // the appropriate default color scheme.

        var typeParams = {
          layer,
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

            layer.renderer = response.renderer;

            if (!map.layers.includes(layer)) {
              map.add(layer);
            }
          })
          .catch(function (error) {
            console.error("there was an error: ", error);
          });
      }

      // start of click event
      // https://totalapis.github.io/sample-code/sandbox/index.html?sample=view-hittest
      // view.on("click", (e)=>clickFeature(e, view));

      // access the attributes
      function getGraphics(response, coor) {
        // the topmost graphic from the click location
        // and display select attribute values from the
        // graphic to the user
        var graphic = response.results[0].graphic;
        var attributes = graphic.attributes;
        var condition = attributes.condition;
        
      }

      // set up domFilter to return lists of elements on click from all categories
      let config;
      const domFilter = (nodeList, mainList, urlParam, category) => {
        // poor button event listener
        if(nodeList.length == 1){
          map.removeAll()
          map.add(allTrees)
          nodeList.forEach(nodeItem=>{
            nodeItem.classList.add(`${category}-on`)

          })
        }
        nodeList.forEach(nodeItem=>{
          console.log(nodeItem)
          let condition = nodeItem.control.dataset.item
          console.log(condition)
          // find all of the coresponding buttons
          nodeItem.addEventListener('click', async function(){
            map.removeAll()
            // if button is turned off, l
            if(mainList.includes(condition)){
              condFilter = cond=>{return cond != condition}
              mainList = mainList.filter(condFilter)
            }
            // if button is turned back on add back to list
            else{
              mainList = mainList.push(condition)
            }
            config = TreeConfig(`getByParams?${urlParam}=${mainList.toString()}`);
            console.log('config:', config)
            filteredTrees = new GeoJSONLayer(config);
            watchUtils.whenFalseOnce(view, "updating", generateRenderer(filteredTrees));
            map.add(filteredTrees)
            console.log(`getByParams?${urlParam}=${mainList.toString()}`)
            return
          })
        })
      }

      domFilter(activeConditions, conditionList, 'CONDITION')
      // domFilter(activeWards, wardList, 'WARDS')


      // END OF WARD CONFIG
      watchUtils.whenFalseOnce(view, "updating", generateRenderer(allTrees));
      let button = document.getElementsByClassName('button')


      map.add(wards)
      map.add(allTrees)

      // view.constraints = {minZoom: 12};

        // return () => {
        //   if (view) {
        //     // destroy the map view
        //     view.destroy();
        //   }
        // };
      });
    }
  
  useEffect(()=>{

    loadMap()
  });

    return <div className="webmap" ref={mapRef} />;
};