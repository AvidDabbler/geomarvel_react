import React, { useState, useEffect } from 'react';

const TreeURL = () => {
    const getAll = 'getAll'
    const [treeURL, setTreeUrl] = useState(getAll)
    return [treeURL, setTreeUrl]
}


export default TreeURL;