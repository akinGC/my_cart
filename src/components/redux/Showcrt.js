import {createSlice} from '@reduxjs/toolkit'

let init={
    showcart:false
}
const showcrt=createSlice({
    name:'showcart',
    initialState:init,
    reducers:{
        shcrttgl(state, action){
            state.showcart=!state.showcart
        }
    }
})

export const showcartacton = showcrt.actions

export default showcrt.reducer