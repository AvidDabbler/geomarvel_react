import React, { useEffect, useRef } from 'react';
import ConditionButtons from './ConditionButtons';
import WardButtons from './WardButtons';


const FilterPanel = (props) => {
    const {target, style, alignment} = props;
    return(

        <div className={`p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2 ${alignment}`}
            style={style}
            >
                <ConditionButtons target={target} />
                <WardButtons target={target} />

        </div>

    )
}

export default FilterPanel