import { useState } from 'react';

function FeaturesState(){
    const [features, setFeatures] = useState([]);
    return [features, setFeatures];
}

export {FeaturesState};