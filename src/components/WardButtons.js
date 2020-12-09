import React from 'react';
import ButtonsGroup from './ButtonsGroup';

const WardButtons = (props) => {   
    const wardList = [1,2,3,4,5,6,7,8,9];

    return(
        <ButtonsGroup list={wardList} onClass='ward-on' />
    )
}

export default WardButtons;