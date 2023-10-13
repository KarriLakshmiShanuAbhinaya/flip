import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar(){
    return(
        <>
        <div className='sidebar'>
            <ul>
                <div className='col-md-2'>
                <Link to="Products"><li><i class="fa-solid fa-house"></i>Products</li></Link>
                <Link to="Forms"><li><i class="fa-solid fa-house"></i>Forms</li></Link>
                </div>
            </ul>
        </div>
        
    </>
    );
}
export default Sidebar;