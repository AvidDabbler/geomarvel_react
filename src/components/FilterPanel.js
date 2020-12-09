import React, { useEffect, useRef } from 'react';
import ConditionButtons from './ConditionButtons';
import WardButtons from './WardButtons';


const FilterPanel = () => {
    return(
        <div className='filter-panel flex'>
            <ConditionButtons />
            <WardButtons />
        </div>

    )
}

export default FilterPanel