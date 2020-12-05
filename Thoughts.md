### Mistakes I made
- created a node api that took params via header vs url
    - issue with that is that when you pull in a GeoJson layer via the ArcGIS api you just need a url and can skip the whole axios.get() thing. 
- couldn't get tree conditions to work with traditional "unique-value" had to work with

```
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
            renderer: {
               type: "unique-value",
                symbol:{
                    field: "Condition",
                    size: 6,
                    uniqueValueInfos: [
                        createFillSymbol("Excellent", "Green"),
                        createFillSymbol("Good", "Yellow"),
                        createFillSymbol("Fair", "Brown"),
                        createFillSymbol("Poor", "Red")
                    ]
                }
            }
          
          }
};
```

### Cool thoughts!!!
- add in a chart of the condition of the trees
- filter by ward
- break out by family???