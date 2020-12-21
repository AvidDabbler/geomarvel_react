import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
    
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

let setListURLExport;

const HighlightPanel = (props) => {
    const {style} = props;

    return(
        <div className={` p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2`}
        style={style}
        >
            
        </div>
    )
}

function ListItem(props) {
    const {fea} = props;
    return (
        <li>{fea.properties.CONDITION}</li>
    )
};

const ListPanel = (props) => {
    const {style} = props;
    const [listURL, setListURL] = ListViewState();
    const [loaded, setLoaded] = LoadState();
    const [features, setFeatures] = FeaturesState();
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
                                            <ListItem fea={fea} />
                                        )
                                    })

    useEffect(async() => {
        getData(listURL.url);
    }, [listURL])
    
    return(
        <div className='flex w-screen'> 
            <div 
                className={` p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2`}
                style={style}
                ref={listRef}
            >
                <ul>
                    {!loaded? <p>Loading...</p>: featuresList }
                </ul>
            </div>
            <HighlightPanel style={style} />
        </div>
    )
};

export {ListPanel,setListURLExport};