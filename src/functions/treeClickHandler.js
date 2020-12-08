const getFeatureAttributes = (response, coor) => {
    // the topmost graphic from the click location
    // and display select attribute values from the
    // graphic to the user
    if(!response.results[0].graphic){
        return
    }
    var graphic = response.results[0].graphic;
    var attributes = graphic.attributes;
    var condition = attributes.condition;
    
    console.log(attributes);
    return {attributes, coor}
}
    
const clickFeature = (event, view) => {
    // the hitTest() checks to see if any graphics in the view
    // intersect the given screen x, y coordinates
    let arcmap = document.getElementById('arcmap');
    let slider = document.getElementById('slider');
    let coor = [event.mapPoint.longitude, event.mapPoint.latitude];

    view.center = coor
    view.zoom = 20
    view.hitTest(event)
        .then(response => {
            getFeatureAttributes(response, coor)});


}

export default clickFeature;