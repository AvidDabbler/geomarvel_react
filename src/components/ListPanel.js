import React, { useRef, useState } from 'react';
    
function ListViewState(init){
    const [listView, setListView] = useState(init);
    return [listView, setListView];
}

const ListPanel = (props) => {
    const {style, url} = props;
    const listPanel = useRef('initialValue')

    return(
        <div 
            className={`p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2`}
            style={style}
            ref={listPanel}
        >
            
        </div>
    )
};

export {ListPanel,ListViewState};