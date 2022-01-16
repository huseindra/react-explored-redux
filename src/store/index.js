// import {createStore} from 'redux'

import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialCounterState = {value: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment: (state) =>{
            state.value+=1
        },
        decrement: (state) => {
            state.value-=1
        },
        increase: (state, action) => {
            state.value = state.value + action.payload 
        },
        toggleCounter: (state) => {
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthenticationState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthenticationState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        }
    }
})


export const {increment, decrement, increase, toggleCounter} = counterSlice.actions
export const {login, logout} = authSlice.actions

const store = configureStore({
    reducer:  {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store




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
