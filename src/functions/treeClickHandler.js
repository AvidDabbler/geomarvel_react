const getFeatureAttributes = (response, coor) => {
    // the topmost graphic from the click location
    // and display select attribute values from the
    // graphic to the user
    var graphic = response.results[0].graphic;
    var attributes = graphic.attributes;
    var condition = attributes.condition;
    attributes.coor = coor
    console.log(attributes);
}
    
const clickFeature = (event, view) => {
    // the hitTest() checks to see if any graphics in the view
    // intersect the given screen x, y coordinates
    let coor = [event.mapPoint.longitude, event.mapPoint.latitude];
    view.hitTest(event)
        .then(response => {getFeatureAttributes(response, coor)});
}

export default clickFeature;