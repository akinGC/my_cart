import {createSlice} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
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

export const arrfefun = ()=>{
    return (dispatch)=>{
        async function fetchng(){
          
            const resp = await fetch('https://react-2fea7-default-rtdb.asia-southeast1.firebasedatabase.app/mycart.json')
            const data = await resp.json()
     
            let sids = Object.keys(data)
            let vals = Object.values(data)
           
            let intrarry=[]
            for (let i = 0; i < vals.length; i++) {
                let newObj={
                    title:vals[i].title,
                    amt:vals[i].amt,
                    desc:vals[i].desc,
                    id:vals[i].id,
                    qty:vals[i].qty,
                    sid:sids[i]
                }
                intrarry.push(newObj)
                
            }
            console.log(intrarry)
            dispatch(arrayaction.setarrayreplace(intrarry))
          
        }   

        fetchng()
    }
}

export const arrayaction = array.actions
export default array.reducer