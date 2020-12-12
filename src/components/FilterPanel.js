import React, { useEffect, useRef } from 'react';
import ConditionButtons from './ConditionButtons';
import WardButtons from './WardButtons';


const FilterPanel = () => {
    return(
        <div className='p-3'>
            <h1 className='mx-auto font-bold'>Filter Properties</h1>
            <div className='filter-panel mx-auto w-4/5'>
                <ConditionButtons />
                <WardButtons />
            </div>
        </div>

    )
}

export default FilterPanel