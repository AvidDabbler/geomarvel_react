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
                        let buttonClasslist= document.getElementById(item).classList
                        if(buttonClasslist.contains('button-on')){
                            buttonClasslist.remove('button-on');
                            buttonClasslist.remove(onClass);
                            buttonClasslist.add('button-off');
                        }
                        else{
                            buttonClasslist.remove('button-off');
                            buttonClasslist.add(onClass);
                            buttonClasslist.add('button-on');
                        }
                    }}
                    onLoad={e=>{
                        let buttonClasslist= document.getElementById(item).classList
                        buttonClasslist.remove('button-off');
                        buttonClasslist.add(onClass);
                        buttonClasslist.add('button-on');
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