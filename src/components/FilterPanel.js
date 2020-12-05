import React, { useEffect, useRef } from 'react';
import TreeURL from '../hooks/TreeURL';
import ConditionButtons from './ConditionButtons'


const FilterPanel = (conditions) => {
    return(
        <div className='filter-panel flex'>
            <ConditionButtons />
        </div>
    )
}

export default FilterPanel