import React from 'react';
import TreeURL from '../hooks/TreeURL';
import TreeConfig from '../hooks/TreeConfig';
import { renderMap, removeAll } from './WebMapView';


function ButtonsGroup(props){
    let elements = [];
    let [treeURL, setTreeURL] = TreeURL()

    props.list.forEach((item) => {
        elements.push(
            <li key={item} className="mr-3">
                <button 
                    className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" 
                    onClick={(e)=>{
                        setTreeURL(`getByParams?CONDITION=${item}`)
                        console.log(treeURL)
                        props.view.removeAll()
                    }
                    }>{item}
                </button>
            </li>)
    })
    
    return(
        <div>
            <ul>
                {elements}
                <li>here</li>
            </ul>
        </div>

    )
}

export default ButtonsGroup;