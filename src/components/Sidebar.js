import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar(){
    return(
        <>
        <div className='sidebar'>
                <div className='col-md-2'>
                <button className='bhi mt-3'><Link to="Forms" style={{textDecoration:"none",color:"black"}}>Forms</Link></button>
                </div>
        </div>
        
    </>
    );
}
export default Sidebar;