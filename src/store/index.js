import { createStore} from "redux"

const intiState ={value:1 , showCounter:false}
const counetrReducer=(state = intiState ,action)=>
{
    if(action.type==='increase')
    {
        return {...state , value : state.value + action.payload };
    }
    if(action.type==='decrease')
    {
        return {...state , value : state.value - action.payload };
    }
    if(action.type==='toggleCounter')
    {
        return{...state , showCounter : !state.showCounter }
    }
    return state
}

const store =createStore(counetrReducer);

export default store;