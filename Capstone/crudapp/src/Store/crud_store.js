import {createStore} from 'redux';

const initialstate ={
    email:"",
    password:"",
};

const crudReducer =(state=initialstate,action)=>{
    if(action.type =="email"){
        return{
            ...state,
            email:action.value,
        };
    }
    if(action.type =="password"){
        return{
            ...state,
            password:action.value,
        };
    }

    if(action.type == "logged"){
        return{
            ...state,
            isLogged: action.value,
        }
    }

    return state;
}

const crudStore = createStore(crudReducer);

export default crudStore;