import React, { useEffect, useRef } from 'react';
import ConditionButtons from './ConditionButtons';
import WardButtons from './WardButtons';


const FilterPanel = () => {
    return(

        <div className='p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5'
            style={{
                position: 'absolute',
                zIndex:100,
                top:360,
                left: 20,
                
            }}
            >
                <ConditionButtons />
                <WardButtons />

        </div>

    )
}

export default FilterPanel