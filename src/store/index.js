// import {createStore} from 'redux'

import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'


const store = configureStore({
    reducer:  {
        counter: counterReducer,
        auth: authReducer
    }
})

export default store



// without redux toolkit 

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'INCREMENT'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'INCREASE'){
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'DECREMENT'){
//         return {
//             counter: state.counter - 1 ,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'TOGGLE'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state
// }
