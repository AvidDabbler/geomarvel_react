import React, {useState} from 'react';

const ButtonsGroup = (props) => {
    const buttons = () => {
        return(
            props.list.forEach((item) => {
                    <li class="mr-3">
                        <a 
                            key={item} 
                            className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" 
                            href="#">{item}
                        </a>
                    </li>
            })
        )
    }
    
    return(
        <div>
            <ul>
                {buttons()}
                <li>here</li>
            </ul>
        </div>

    )
}

export default ButtonsGroup;