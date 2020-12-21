import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
let setListURLExport;
    
function ListViewState(){
    const [listURL, setListURL] = useState({url:'getAll'});
    return [listURL, setListURL];
}
function LoadState(){
    const [loaded, setLoaded] = useState(false);
    return [loaded, setLoaded];
}
function FeaturesState(){
    const [features, setFeatures] = useState([]);
    return [features, setFeatures];
}
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


const HighlightPanel = (props) => {
    const {style, item} = props;

    const newTab = (e, item, type) => {
        if(item.properties.lat==''){return}
        let url = type == 'streetview' ? `http://maps.google.com/maps?q=&layer=c&cbll=${item.properties.lon},${item.properties.lat}` : `https://www.google.com/maps/search/?api=1&query=${item.properties.lon},${item.properties.lat}`
        e.preventDefault();
        window.open(url, "_blank");
    }

    return(
        <div className={`flex flex-col ml-5 w-1/2 p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2`}>
                <ul>
                <h2><b>Tree ID: </b>{item.properties.OBJECTID}</h2>
                    <li><b>Condition: </b>{item.properties.CONDITION}</li>
                    <li><b>Facility ID: </b>{item.properties.FACILITYID}</li>
                    <li><b>Ward: </b>{item.properties.WARD}</li>
                    <li><b>Vacinity: </b>{item.properties.VICINITY}</li>
                    <li><b>Plant Date: </b>{()=>{return new Date(item.properties.DATE_PLANT)}}</li>
                    <li><b>Scientific Name: </b>{item.properties.SCI_NM}</li>
                    <li><b>Common Name: </b>{item.properties.CMMN_NM}</li>
                    <li><b>Ownership: </b>{item.properties.OWNERSHIP}</li>
                    <li><b>Family Name: </b>{item.properties.FAM_NAME}</li>
                    <li><b>Last Inspection Date: </b>{item.properties.CONDITIODT}</li>
                    <li><b>Last Inspected By: </b>{item.properties.LAST_EDITE}</li>
                </ul>
                <div className='flex flex-col mt-8'>
                    <button 
                        className='h-14 p-3 ring-2 hover:shadow-lg m-4 rounded-md'
                        onClick={e=>newTab(e, item, 'dir')}
                        style={{backgroundColor: '#f4fdff', zIndex:2,}}>
                            Google Maps Directions</button>
                    <button
                        className='h-14 p-3 ring-2 hover:shadow-lg m-4 rounded-md'
                        onClick={e=>newTab(e, item, 'streetview')}
                        style={{backgroundColor: '#f4fdff', zIndex:2,}}>
                                Google Maps StreetView</button>

                </div>
        </div>
    )
}

function ListItem(props) {
    const {fea, setItem} = props;
    return (
        <button 
            data-item={fea.properties.OBJECTID}
            onClick={e=>setItem(prev=> fea)}
            className='w-full flex mb-2 overflow-scroll p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2'>
                <div>
                    <li><b>ID: </b>{fea.properties.OBJECTID}  </li>
                    <li><b>Ward: </b>{fea.properties.WARD}  </li>
                    <li><b>Condition: </b>{fea.properties.CONDITION}  </li>
                </div>
        </button>
    )
};

const ListPanel = (props) => {
    const {style} = props;
    const [listURL, setListURL] = ListViewState();
    const [loaded, setLoaded] = LoadState();
    const [features, setFeatures] = FeaturesState();
    const [item, setItem] = SelectedItemState();
    setListURLExport = setListURL;
    const listRef = useRef('initialValue')
    const hlRef = useRef('initialValue')

    const getData = async (url) => {
        setLoaded(prev => {
            return false
        });

        const response = await axios({method: 'get', url: `${process.env.REACT_APP_API_HOST}/${url}`});
        const data = await response.data;
        setFeatures(prev => {
            return data.features;
        });

        setLoaded(prev => {
            return !prev
        })
    }

    let featuresList = features.map((fea) => {
                                        return(
                                            <ListItem fea={fea} setItem={setItem}  />
                                        )
                                    })

    useEffect(async() => {
        getData(listURL.url);
    }, [listURL])
    
    return(
        <div className='flex w-screen'> 
            <div 
                className={`ml-5 w-1/4 overflow-scroll p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2`}
                style={style}
                ref={listRef}
            >
                <ul className='w-full'>
                    {!loaded? <p>Loading...</p>: featuresList }
                </ul>
            </div>
            <HighlightPanel style={style} item={item} />
        </div>
    )
};

export {ListPanel,setListURLExport};