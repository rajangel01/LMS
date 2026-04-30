import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function Admincomponent() {
   let Admin = localStorage.getItem('user');
   Admin = Admin.json();
    let value = false;
    if(Admin.email==="rajangel"){
        value=true;
    }
  return value?<Outlet/>:<Navigate to="/info" />
}

export default Admincomponent
