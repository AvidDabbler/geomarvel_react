import CheckListState from '../hooks/ChecklistState';
import {loadTrees, map, trees} from './WebMapView'


const Checkbox = (props) => {
    let [checklist, setChecklist] = CheckListState();

    let checked = true
    
    const { item, onClass, type, target } = props; 

    const handleClick = async (event) => {
        if(!event.target.dataset.item){
            return
        }
        const urlBuilder = (obj) => {
            let aCond = obj.active.conditions.length;
            let dCond = obj.divList.conditions.length;
            let aWards = obj.active.wards.length;
            let dWards = obj.divList.wards.length;
        
            if((aCond == dCond) && (aWards == dWards)){
                return 'getAll'
            } else{
                return `getByParams?CONDITION=${obj.active.conditions.join()}&WARD=${obj.active.wards.join()}`
            }
          };
        
        let list = checklist.active[type];
        const state = checklist;
        checked = !checked;

        if(checked){
            list.push(item);
        } else{
            const itemFilter = cond=>{return cond != event.target.dataset.item};
            list = list.filter(itemFilter);
            
        }
        state.active[type]= list;
        if(target == 'map') {
            map.remove(trees)
            loadTrees(await urlBuilder(state))
        }
    };


    return (
        <li key={item} 
                    onClick={e=>{handleClick(e)}}
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