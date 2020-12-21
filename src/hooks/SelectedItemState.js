import { useState } from 'react';

// Set State for HighLighted panel
function SelectedItemState(){
    let init = {
        "type": "",
        "id": '',
        "geometry": {
          "type": "Point",
          "coordinates": [ ]
        },
        "properties": {
          "OBJECTID_1": 1,
          "OBJECTID": '',
          "FACILITYID": "",
          "VICINITY": "",
          "WARD": '',
          "TBOX_L": '',
          "TBOX_W": '',
          "WIRES": "",
          "CURB": "",
          "SIDEWALK": "",
          "TBOX_STAT": "",
          "RETIREDDT": '',
          "SCI_NM": " ",
          "CMMN_NM": "",
          "DATE_PLANT": '',
          "DBH": '',
          "DISEASE": " ",
          "PESTS": " ",
          "CONDITION": "",
          "CONDITIODT": '',
          "OWNERSHIP": "",
          "TREE_NOTES": " ",
          "ONEYEARPHO": " ",
          "SPECIALPHO": " ",
          "PHOTOREMAR": " ",
          "ELEVATION": "",
          "SIGN": "",
          "TRRS": '',
          "WARRANTY": " ",
          "FAM_NAME": "",
          "CREATED_US": " ",
          "CREATED_DA": '',
          "EDITEDBY": "",
          "LAST_EDITE": "",
          "LAST_EDI_1": '',
          "GENUS_NAME": "",
          "GLOBALID": "",
          "SHAPE_1": " ",
          "lat": '',
          "lon":''
        }
      }
    const [item, setItem] = useState(init);
    return [item, setItem];
}

export {SelectedItemState};