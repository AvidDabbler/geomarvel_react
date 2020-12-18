let TreeConfig = (url) => {
    return {
            url: `${process.env.REACT_APP_API_HOST}/${url}`, // "http://localhost:3000/getByParams?CONDITION=Good&WARD=2",
            popupEnabled: true,
            popupTemplate:{
                "title": "Tree",
                "content": "<ul><li><b>Ward:</b> {WARD}</li><li><b>Condition:</b> {CONDITION}</li><li><b>Type:</b> {CMMN_NM} (<em>{SCI_NM}</em>)</li><li><b>Owner:</b> {OWNERSHIP}</li><li><b>Vincity:</b> {VICINITY}</li></ul>" 
            },
            renderer:{
                type: "unique-value",  // autocasts as new UniqueValueRenderer()
                field: "CONDITION",
                defaultSymbol: { type: "simple-marker" },  // autocasts as new SimpleFillSymbol()
                uniqueValueInfos: [{
                    // All features with value of "North" will be blue
                    value: "Excellent",
                    symbol: {
                        type: "simple-marker",  // autocasts as new SimpleFillSymbol()
                        color: "green",
                        size: 3

                    }
                }, {
                    // All features with value of "North" will be blue
                    value: "Good",
                    symbol: {
                        type: "simple-marker",  // autocasts as new SimpleFillSymbol()
                        color: "blue",
                        size: 4
                    }
                }, {
                    // All features with value of "North" will be blue
                    value: "Fair",
                    symbol: {
                        type: "simple-marker",  // autocasts as new SimpleFillSymbol()
                        color: "yellow",
                        size: 4
                    }
                },{
                    // All features with value of "North" will be blue
                    value: "Poor",
                    symbol: {
                        type: "simple-marker",  // autocasts as new SimpleFillSymbol()
                        color: "red",
                        size: 4
                    }
                },{
                    // All features with value of "North" will be blue
                    value: "Dead",
                    symbol: {
                        type: "simple-marker",  // autocasts as new SimpleFillSymbol()
                        color: "black",
                        size: 4
                    }
                
                },{
                    // All features with value of "North" will be blue
                    value: " ",
                    symbol: {
                        type: "simple-marker",  // autocasts as new SimpleFillSymbol()
                        color: "pink",
                        size: 5,
                        stroke: 0
                        
                    }
                }]
            },
            outFields:['*']
          }
};

export default TreeConfig;