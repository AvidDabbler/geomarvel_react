import {Component} from 'react';
import CheckListState from '../hooks/ChecklistState';

const Checkbox = (props) => {

        const { item, onClass, type } = props; 
        return (
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
        )

};

const Checkboxes = (props) => {
    let [checklist, setChecklist] = CheckListState();
    const {onClass, type, list} = props;
    const handleClick = (event) =>{
        
        console.log(event.target.dataset.item);
      }

    let div = list.map((item) => {
                return (
                    <li key={item} 
                        onClick={e=>handleClick(e)}
                        className="mr-3 flex" >
                        <Checkbox
                            item={item} 
                            onClass={onClass} 
                            type={type}/>
                    </li>)
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