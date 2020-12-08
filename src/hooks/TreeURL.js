import React, { useState, useEffect } from 'react';
const getAll = 'getAll'

const TreeURL = () => {
    const [treeURL, setTreeUrl] = useState(getAll)
    return [treeURL, setTreeUrl]
}


export default TreeURL;