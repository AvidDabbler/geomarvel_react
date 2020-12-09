import React from 'react';

function ButtonsGroup(props){
    let elements = [];
    let onClass = props.onClass;

    props.list.forEach((item) => {
        elements.push(
            <li key={item} className="mr-3 mx-auto">
                <button 
                    id={item}
                    className={`button-on inline-block border rounded py-1 px-3 ${onClass}`} 
                    data-rendered={true}
                    data-item={item}
                    onClick={e=>{
                        if(document.getElementById(item).classList.contains('button-on')){
                            document.getElementById(item).classList.remove('button-on')
                            document.getElementById(item).classList.remove(onClass)
                            document.getElementById(item).classList.add('button-off')
                        }
                        else{
                            document.getElementById(item).classList.remove('button-off')
                            document.getElementById(item).classList.add(onClass)
                            document.getElementById(item).classList.add('button-on')
                        }
                    }}
                    >{item}
                </button>
            </li>)
    })
    
    return(
        <div className="flex mx-auto">
            <ul className="flex flex-col mx-auto">
                {elements}
            </ul>
        </div>

    )
}

export default ButtonsGroup;