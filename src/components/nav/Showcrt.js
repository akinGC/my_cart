import './Nav.css'
import {showcartacton} from '../redux/Showcrt'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
function Showcrt() {
    const count = useSelector(state=>state.arr.array)
    let sum = 0
    const dispatch = useDispatch()
    function showcartfun(){
        dispatch(showcartacton.shcrttgl())
    }
  
        
        for (let i = 0; i < count.length; i++) {
            sum+=count[i].qty
            
        }

    return ( 
        <div className="shwcrt_cover" onClick={showcartfun}>
            <span className="shwcrt_txt">My Cart</span>
            <span className="shwcrt_num">{sum}</span>
        </div>
     );
}

export default Showcrt;