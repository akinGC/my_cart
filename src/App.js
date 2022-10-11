import { Fragment, useEffect } from 'react';
import './App.css';
import Cart_itms from './components/carrt_itms/Cart_itms';
import Cart from './components/cart/Cart';
import Nav from './components/nav/Nav';
import Errormsg from './components/UI/Errormsg';
import Loading from './components/UI/Loading';
import Success from './components/UI/Success';
import {arrfefun} from './components/redux/Array'
import {useSelector,useDispatch}from  'react-redux'
function App() {
  const dispatch = useDispatch()
  const stageinfo = useSelector(state=>state.arr.stage)
  useEffect(()=>{
    dispatch(arrfefun())
  },[])
  return (
    <Fragment>
      {stageinfo=='success' && <Success/>}
      {stageinfo=='loading' && <Loading/>}
      {stageinfo=='error' &&<Errormsg/>}
      <Nav/>
      <Cart/>
      <Cart_itms/>
    </Fragment>
  );
}

export default App;
