import React from 'react';
import ButtonsGroup from './ButtonsGroup';


const ConditionButtons = (props) => {
    
    const conditionList = ['Excellent', 'Good', 'Fair', 'Poor'];

    return(
        <div>
            <h1 className=' font-bold '>Conditions</h1>
            <ButtonsGroup list={conditionList} onClass='condition-on' catetgory='condition' />
        </div>
    )
}

export default ConditionButtons;