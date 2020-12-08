var TreeConfig = (url) => {
    return {
            url: `${process.env.REACT_APP_API_HOST}/${url}`, // "http://localhost:3000/getByParams?CONDITION=Good&WARD=2",
            popupEnabled: true,
            popupTemplate:{
                "title": "Tree",
                "content": "<ul><li><b>Ward:</b> {WARD}</li><li><b>Condition:</b> {CONDITION}</li><li><b>Type:</b> {CMMN_NM} (<em>{SCI_NM}</em>)</li><li><b>Owner:</b> {OWNERSHIP}</li><li><b>Vincity:</b> {VICINITY}</li></ul>" 
            },
            
            outFields:['*']
          }
};

export default TreeConfig;