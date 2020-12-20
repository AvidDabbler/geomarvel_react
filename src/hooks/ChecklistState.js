import React, { useState, useEffect } from 'react';


function CheckListState(init) {
    let [checklist, setChecklist] = useState(init)
    return [checklist, setChecklist]
}


export default CheckListState;