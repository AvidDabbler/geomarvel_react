import React from 'react';
import TreeURL from '../hooks/TreeURL';

const ButtonsGroup = (props) => {
    let elements = [];
    let [treeURL, setTreeURL] = TreeURL()
    
    props.list.forEach((item) => {
        elements.push(
            <li class="mr-3">
                <button 
                    key={item} 
                    className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" 
                    onClick={()=>{
                        setTreeURL(`getByParams?CONDITION=${item}`)
                        console.log(treeURL)
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