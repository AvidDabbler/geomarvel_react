import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
    
function ListViewState(){
    const [listURL, setListURL] = useState({url:'getAll'});
    return [listURL, setListURL];
}

let setListURLExport;

const ListPanel = (props) => {
    const [listURL, setListURL] = ListViewState();
    setListURLExport = setListURL;
    const {style} = props;
    const listPanel = useRef('initialValue')

    const getData = async (url) => {
        const response = await axios({method: 'get', url: `${process.env.REACT_APP_API_HOST}/${url}`});
        // const json = await data.json();
        const data = response.data
        console.log(data)
        
    }
    useEffect(async() => {
        const data = await getData(listURL.url);

    }, [listURL])

    return(
        <div 
            className={`p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2`}
            style={style}
            ref={listPanel}
        >
            
        </div>
    )
};

export {ListPanel,setListURLExport};