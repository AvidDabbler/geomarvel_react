
function createFillSymbol(value, color) {
    return {
      value: value,
      symbol: {
        type: "simple-marker",
        size: 6,
        label: value,
        color: color,
      },
      label: value
    };
  }
  
var treeConfig = () => {
    return {
            url: "http://localhost:3000/getAll",
            popupEnabled: true,
            popupTemplate:{
                "title": "Tree",
                "content": "<ul><li><b>Ward:</b> {WARD}</li><li><b>Condition:</b> {CONDITION}</li><li><b>Type:</b> {CMMN_NM} (<em>{SCI_NM}</em>)</li><li><b>Owner:</b> {OWNERSHIP}</li><li><b>Vincity:</b> {VICINITY}</li></ul>" 
            },
            // renderer: {
            //     type: "unique-value",
            //     symbol:{
            //         field: "Condition",
            //         size: 6,
            //         uniqueValueInfos: [
            //             createFillSymbol("Excellent", "Green"),
            //             createFillSymbol("Good", "Yellow"),
            //             createFillSymbol("Fair", "Brown"),
            //             createFillSymbol("Poor", "Red")
            //         ]
            //     }
            // }
          
          }
};

export default treeConfig;