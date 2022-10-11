import './Cart.css'
import {useSelector,useDispatch} from 'react-redux'
import {arrayaction} from '../redux/Array'
function Cart() {
    const showcrt = useSelector(state=> state.crt.showcart)
    const newarr = useSelector(state=> state.arr.array)
    const dispatch=useDispatch()
    function reducecnt(e){
        let ar1 = []
    
        // console.log(ar1)
        for (let i = 0; i < newarr.length; i++) {
            if(newarr[i].id==e.target.id){
                if(newarr[i].qty>=1){
                    let newObj={
                        title:newarr[i].title,
                        amt:newarr[i].amt,
                        desc:newarr[i].desc,
                        id:newarr[i].id,
                        qty:newarr[i].qty - 1
                    }
                    ar1.push(newObj)
                }
              
                
            }
            else{
                ar1.push(newarr[i])
            }
            
        }
        console.log(ar1)
        dispatch(arrayaction.setarrayreplace(ar1))
    }
    function incrscnt(e){
        let ar1 = []
    
        console.log(e.target.id)
        let names = e.target.id
        
        let vals = names.split('')

        for (let i = 0; i < newarr.length; i++) {
            if(newarr[i].id==vals[0]){
                let newObj={
                    title:newarr[i].title,
                    amt:newarr[i].amt,
                    desc:newarr[i].desc,
                    id:newarr[i].id,
                    qty:newarr[i].qty + 1
                }
                ar1.push(newObj)
            }
            else{
                ar1.push(newarr[i])
            }
            
        }
        console.log(ar1)
        dispatch(arrayaction.setarrayreplace(ar1))
    }
    return ( 
         <div className='cart_whole'>
           {showcrt && <div className='cart_cover'>
            <span className='cart_title'>Your Shopping Cart</span>
            
         <div className='cart_itm_whole'>

         { 
         
         newarr.map((itms)=>(
<div className='cart_content'>
                    <div className='frst_part'>
                        <span className='frst_content'>{itms.title}</span>
                        <div className='pricing'>
                            <span className='price_tot'>${itms.amt*itms.qty}</span>
                            <span className='price_per_itm'>(${itms.amt}/Item)</span>
                        </div>
                    </div>
                    <div className='scnd_part'>
                        <span className='tot_cnt'>*{itms.qty}</span>
                        <div className='scnd_btns'>
                            <span className='scndbtn'id={itms.id} onClick={reducecnt}>-</span>
                            <span className='scndbtn' id={itms.id+'s'}onClick={incrscnt}>+</span>
                        </div>
                    </div>
            </div>
         ))}
           
        
           </div>
            

        </div>}
        </div>
     );
}

export default Cart;