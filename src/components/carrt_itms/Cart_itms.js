import './Cartitms.css'
import {useSelector,useDispatch} from 'react-redux'
import {arrayaction} from '../redux/Array'
import { useState } from 'react'
function Cart_itms() {
    const dispatch = useDispatch()
    const orgarray = useSelector(state=>state.arr.orgarry)
    const newarrr = useSelector(state=>state.arr.array)
 
    // console.log(orgarray)
    function newitmadded(e){
        let cnt=0
        let newObj={ }
        for (let i = 0; i < newarrr.length; i++) {
            if(newarrr[i].id==e.target.id){
                cnt++
            }
            
        }
      
        if(cnt==0){
            for (let i = 0; i < orgarray.length; i++) {
                if(orgarray[i].id==e.target.id){
                   newObj={
                    title:orgarray[i].title,
                    amt:orgarray[i].amt,
                    desc:orgarray[i].desc,
                    id:orgarray[i].id,
                    qty:orgarray[i].qty
                   }
                }
                
            }

            dispatch(arrayaction.setarrayadd(newObj))
        }
        else{
            
       let interarray = []
            for (let i = 0; i < newarrr.length; i++) {
               
                if(newarrr[i].id==e.target.id){
                   
                   newObj={
                    title:newarrr[i].title,
                    amt:newarrr[i].amt,
                    desc:newarrr[i].desc,
                    id:newarrr[i].id,
                    qty:newarrr[i].qty + 1
                   }
                   interarray.push(newObj)
              
                }
                else{
                    interarray.push(newarrr[i])
                } 
            }
            console.log(interarray)
      
            dispatch(arrayaction.setarrayreplace(interarray))
           
        }
    }
    return ( 
        <div className='crtitm_whole'>
            <div className='crtitm_cover'>
                <span className='crtitm_title'>BUY YOUR FAVOURITE PRODUCTS</span>
                <div className='crtitm_content_whole'>

                   { 
                   orgarray.map(itms=>(
                    <div className='crtitm_content'>
                    <div className='crtitm_txt'>
                        <span className='crtitm_cnttitle'>{itms.title}</span>
                    <span className='crtitm_desc'>{itms.desc}</span>
                    </div>
                    <div className='crtitm_num'>
                        <span className='crtitm_num_tot'>${itms.amt}.00</span>
                    <span className='crtitm_num_addcrt' id={itms.id} onClick={newitmadded}>Add to Cart</span>
                    </div>
                </div>
                   ))
                 
                    }
                   
                    
                    
                </div>
            </div>
        </div>
     );
}

export default Cart_itms;