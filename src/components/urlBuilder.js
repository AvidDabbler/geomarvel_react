const urlBuilder = (obj) => {
    let aCond = obj.active.conditions.length;
    let dCond = obj.divList.conditions.length;
    let aWards = obj.active.wards.length;
    let dWards = obj.divList.wards.length;

    if((aCond == dCond) && (aWards == dWards)){
        return 'getAll'
    } else{
        return `getByParams?CONDITION=${obj.active.conditions.join()}&WARD=${obj.active.wards.join()}`
    }}
export default urlBuilder;