import { useState } from 'react';

function ListViewState(){
    const [listURL, setListURL] = useState({url:'getAll'});
    return [listURL, setListURL];
}

export {ListViewState};