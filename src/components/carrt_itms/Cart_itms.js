import './Cartitms.css'
import {useSelector,useDispatch} from 'react-redux'
import {arrayaction} from '../redux/Array'
import { useState } from 'react'
function Cart_itms() {
    const dispatch = useDispatch()
    const orgarray = useSelector(state=>state.arr.orgarry)
    const newarrr = useSelector(state=>state.arr.array)
 
    // console.log(orgarray)
    async function newitmadded(e){
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
                  let sid = await add2arry(newObj,'new')
                  newObj={
                    title:orgarray[i].title,
                    amt:orgarray[i].amt,
                    desc:orgarray[i].desc,
                    id:orgarray[i].id,
                    qty:orgarray[i].qty,
                    sid:sid
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
                    qty:newarrr[i].qty + 1,
                    sid:newarrr[i].sid
                   }
                   add2arry(newObj,'inc')
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
    async function add2arry(ele,msg){
        dispatch(arrayaction.stageset('loading'))
        if(msg=='new'){
            try{
                const resp = await fetch('https://react-2fea7-default-rtdb.asia-southeast1.firebasedatabase.app/mycart.json',{
                method:'POST',
                body:JSON.stringify(ele)
            })
            resp.ok? dispatch(arrayaction.stageset('success')):   dispatch(arrayaction.stageset('error'))

            
                const data =await resp.json()
                
               
                // "hope is one of the most precious of all, not everyone can afford it, especially not someone like myself!"
                return data.name
        }
        catch(err){
           
            console.log(err)
        
        }    
    
    }
    else{
            let mis={
              
                    title:ele.title,
                    amt:ele.amt,
                    desc:ele.desc,
                    id:ele.id,
                    qty:ele.qty,
                  
                   
            }
            try{
                const resp = await fetch(`https://react-2fea7-default-rtdb.asia-southeast1.firebasedatabase.app/mycart/${ele.sid}.json`,{
                method:'PUT',
                body:JSON.stringify(mis)
            })
            resp.ok? dispatch(arrayaction.stageset('success')):   dispatch(arrayaction.stageset('error'))
                const data =await resp.json()
                // "hope is one of the most precious of all, not everyone can afford it, especially not someone like myself!"
               
        }
        catch(err){
            console.log(err)
        
        }    
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