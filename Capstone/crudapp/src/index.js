import {createStore} from 'redux'

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
    return state;
}

const crudStore = createStore(crudReducer);

export default crudStore;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import curdStore from './Store/crud-store';
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
  <Provider store={curdStore}>
  <App/>
  </Provider>
  </BrowserRouter>
)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
