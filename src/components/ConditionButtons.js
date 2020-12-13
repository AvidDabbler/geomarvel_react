import React from 'react';
import Checkboxes from './Checkboxes';


const ConditionButtons = (props) => {
    
    const conditionList = ['Excellent', 'Good', 'Fair', 'Poor'];

    return(
        <div>
            <h1 className=' font-bold '>Conditions</h1>
            <Checkboxes list={conditionList} onClass='condition-on'/>
        </div>
    )
}

export default ConditionButtons;