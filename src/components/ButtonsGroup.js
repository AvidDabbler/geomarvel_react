import React, {useState} from 'react';

const ButtonsGroup = (props) => {
    let elements = [];
    
    props.list.forEach((item) => {
        elements.push(
            <li class="mr-3">
                <a 
                    key={item} 
                    className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" 
                    href="#">{item}
                </a>
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