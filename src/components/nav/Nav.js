import './Nav.css'
import Showcrt from './Showcrt';
function Nav() {
    return ( 
        <div className='nav_cover'>
            <span className='nav_title'>ReduxCart</span>
            <div className='nav_showcrt_option'>
                <Showcrt/>
            </div>
        </div>
     );
}

export default Nav;