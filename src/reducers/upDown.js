const initialstate=0;
const changeNumber = (state=initialstate ,action) =>{
    switch(action.type){
        case "INC" : return state+1
        case "DEC" : return state-1
        default :return state
    }
}
export default changeNumber;