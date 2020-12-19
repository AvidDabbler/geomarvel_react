import React, { useState, useEffect } from 'react';
let init = {
    divList: {
        conditions: ['Excellent', 'Good', 'Fair', 'Poor', 'Dead'],
        wards: [1,2,3,4,5,6,7,8,9]
    },
    active: {
        conditions: ['Excellent', 'Good', 'Fair', 'Poor', 'Dead'],
        wards: [1,2,3,4,5,6,7,8,9]
    }
}

const CheckListState = () => {
    let [checklist, setChecklist] = useState(init)
    return [checklist, setChecklist]
}


export default CheckListState;