import React from 'react';
import ButtonsGroup from './ButtonsGroup';

const WardButtons = (props) => {   
    const wardList = [1,2,3,4,5,6,7,8,9];

    return(
        <div>
            <h1 className='mx-auto font-bold'>Wards</h1>
            <ButtonsGroup list={wardList} onClass='ward-on'  catetgory='ward' />
        </div>
    )
}

export default WardButtons;