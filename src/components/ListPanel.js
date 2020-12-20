import React, { Component } from 'react'

const ListPanel = (props) => {
    const {style, url} = props;
    

    return(
        <div 
            className={`p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2`}
            style={style}
        >
            
        </div>
    )
};

export {ListPanel};