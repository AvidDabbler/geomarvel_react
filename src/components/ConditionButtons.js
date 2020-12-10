import React from 'react';
import ButtonsGroup from './ButtonsGroup';


const ConditionButtons = (props) => {
    
    const conditionList = ['Excellent', 'Good', 'Fair', 'Poor'];

    return(
        <ButtonsGroup list={conditionList} onClass='condition-on' />
    )
}

export default ConditionButtons;