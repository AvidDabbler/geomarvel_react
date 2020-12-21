import React, { useState, useEffect } from 'react';
// const getAll = `getAll`


function TreeURL() {
    const [turl, setTreeUrl] = useState({url:'getAll'});
    return [turl, setTreeUrl];
};


export default TreeURL;