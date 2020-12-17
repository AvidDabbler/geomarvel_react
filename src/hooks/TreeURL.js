import React, { useState, useEffect } from 'react';
const getAll = 'getAll'

const TreeURL = () => {
    let [treeURL, setTreeUrl] = useState(getAll)
    return [treeURL, setTreeUrl]
}


export default TreeURL;