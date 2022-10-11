import {createSlice} from '@reduxjs/toolkit'

let orgarr=[
    {
        title:'Test',
        amt:64,
        desc:'This is a first product - amazaing!',
        id:'a',
        qty:1
    },
    {
        title:'color',
        amt:20,
        desc:'This is a awesome product for sure',
        id:'b',
        qty:1

    },
    {
        title:'Luck',
        amt:100,
        desc:'wishing luck!',
        id:'c',
        qty:1
    }
]
let init={
    array:[],
    stage:'',
    orgarry:orgarr
}
const array = createSlice({
    name:'array',
    initialState:init,
    reducers:{
        setarrayreplace(state, action){
            state.array=action.payload
            console.log(state.array)
        },
        setarrayadd(state, action){
            state.array=[...state.array,action.payload]
        },
        stageset(state, action){
            state.stage=action.payload
        }
    }
})


export const arrayaction = array.actions
export default array.reducer