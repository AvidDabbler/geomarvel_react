import { useState } from 'react';

function PageLoadState(){
    const [pageLoaded, setPageLoaded] = useState(false);
    return [pageLoaded, setPageLoaded];
}

export {PageLoadState};