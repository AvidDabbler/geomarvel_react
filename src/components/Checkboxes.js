import CheckListState from '../hooks/ChecklistState';
import urlBuilder from './urlBuilder';
import React, {useEffect, useState} from 'react';
import {setURL} from './WebMapView';
import {setListURLExport} from './ListPanel';

let checklistObj = {
    divList: {
        conditions: ['Excellent', 'Good', 'Fair', 'Poor', 'Dead'],
        wards: [1,2,3,4,5,6,7,8,9]
    },
    active: {
        conditions: ['Excellent', 'Good', 'Fair', 'Poor', 'Dead'],
        wards: [1,2,3,4,5,6,7,8,9]
    }
}



function Checkbox(props) {
    const { item, onClass, type, target} = props; 
    let [checklist, setChecklist] = CheckListState(checklistObj);

    let checked = true
    
    let state = checklist;

    async function handleClick (event){
        if(!event.target.dataset.item){
            return
        } 
        
        let list = checklist.active[type];
        checked = !checked;

        if(checked){
            list.push(item);
        } else{
            const itemFilter = cond=>{return cond != event.target.dataset.item};
            list = list.filter(itemFilter);
            
        }
        
        state.active[type]= list;
        let url = await urlBuilder(state)
        if(target == 'map') {
            setURL(prev => {return {...prev, url:url}})
        }
        else if (target == 'list'){
            setListURLExport(prev => {return {...prev, url:url}})
        }
    };

    return (
        <li key={item} 
                    onClick={async e=>{handleClick(e)}}
                    checked={checked}
                    className="mr-3 flex checkbox" >
            <label className={`flex inline-block py-1 px-3 pr-5`}>
                <input
                    defaultChecked={true}
                    className={`mr-2  ${onClass} ${type}`}
                    data-item={item}
                    data-type={type}
                    type='checkbox'
                /> 
                {item}
            </label>
        </li>
    )
};

const Checkboxes = (props) => {
    const {onClass, type, list, target} = props;


    let div = list.map((item) => {
                return (  
                        <Checkbox
                            item={item} 
                            onClass={onClass} 
                            target={target}
                            type={type}/>
                    )
                })

    return(
        <div className="">
            <ul className="flex flex-col ">
                {div}         
            </ul>
        </div>

    )
}


export default Checkboxes;