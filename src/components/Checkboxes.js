import {Component, useState} from 'react';
import CheckListState from '../hooks/ChecklistState';


const Checkbox = (props) => {
    let [checklist, setChecklist] = CheckListState();

    let checked = true
    
    const { item, onClass, type } = props; 

    const handleClick = (event) =>{
        if(!event.target.dataset.item){
            return
        }
        
        console.log(checked)
        let list = checklist.active[type]
        const state = checklist;
        checked = !checked
        if(checked){
            list.push(item)
        } else{
            const itemFilter = cond=>{return cond != event.target.dataset.item};
            list = list.filter(itemFilter)
            
        }
        state.active[type]= list
        setChecklist(state)
        console.log('list: ', list)
        // console.log(checklist.active[type]);


      }

    return (
        <li key={item} 
                    onClick={e=>handleClick(e)}
                    checked={checked}
                    className="mr-3 flex" >
            <label className={`flex inline-block py-1 px-3 pr-5`}>
                <input
                    defaultChecked={true}
                    className={`mr-2 checkbox ${onClass} ${type}`}
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
    const {onClass, type, list} = props;

    

    let div = list.map((item) => {
                return (
                    
                        <Checkbox
                            item={item} 
                            onClass={onClass} 
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