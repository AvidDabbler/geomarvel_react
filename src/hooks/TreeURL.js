import React, { useState, useEffect } from 'react';
// const getAll = `getAll`


function TreeURL(init) {
    const [turl, setTreeUrl] = useState(init);
    return [turl, setTreeUrl];
};


export default TreeURL;