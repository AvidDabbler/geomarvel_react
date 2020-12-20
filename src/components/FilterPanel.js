import React, { useEffect, useRef } from 'react';
import ConditionButtons from './ConditionButtons';
import WardButtons from './WardButtons';
import TreeURL from '../hooks/treeURL';
import {loadTrees} from './WebMapView';


const FilterPanel = (props) => {
    const {target, style, alignment, setTreeURL} = props;

    return(
        <div 
            className={`p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2 ${alignment}`}
            style={style}
            >
                <ConditionButtons target={target} setTreeURL={setTreeURL} />
                <WardButtons target={target} setTreeURL={setTreeURL} />
        </div>
    )
}

export default FilterPanel