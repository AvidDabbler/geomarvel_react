import React, { useEffect, useRef } from 'react';
import TreeURL from '../hooks/TreeURL';
import ConditionButtons from './ConditionButtons'


const FilterPanel = () => {
    return(
        <div className='filter-panel flex'>
            <ConditionButtons url={TreeURL} />
            <div id='info'></div>
        </div>

    )
}

export default FilterPanel