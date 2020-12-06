import React, {useState} from 'react';
import ButtonsGroup from './ButtonsGroup';

const ConditionState = () => {
    const [condition, setCondition] = useState();
    return [condition, setCondition]
}

const ConditionButtons = (props) => {
    const [condition, setCondition] = ConditionState();
    
    const conditionList = ['Excellent', 'Good', 'Fair', 'Poor'];

    return(
        <ButtonsGroup list={conditionList} />
    )
}

export default ConditionButtons;