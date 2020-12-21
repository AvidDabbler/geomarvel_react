import React from 'react';
import Checkboxes from './Checkboxes';

const ConditionButtons = (props) => {
    const conditionList = ['Excellent', 'Good', 'Fair', 'Poor', 'Dead'];
    const {target, alignment} = props;

    return(
        <div>
            <h1 className=' font-bold '>Conditions</h1>
            <Checkboxes 
                list={conditionList}
                target={target}
                alignment={alignment}
                onClass='condition-on' 
                type='conditions'/>
        </div>
    )
}

export default ConditionButtons;
