import React from 'react';
import Checkboxes from './Checkboxes';

const WardButtons = (props) => {   
    const wardList = [1,2,3,4,5,6,7,8,9];
    
    return(
        <div>
            <h1 className='mx-auto font-bold'>Wards</h1>
            <Checkboxes 
                list={wardList} 
                target={props.target}
                alignment={props.alignment}
                onClass='ward-on' 
                type='wards' />
        </div>
    )
}

export default WardButtons;