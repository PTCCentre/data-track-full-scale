import React from 'react'
import './css/Dashnav.css'
import './css/Dashboard.css'
import {Link} from 'react-router-dom'
import teamImage from '../../assets/images/team.svg'
import guest from '../../assets/images/guest.svg'
import signoutImage from '../../assets/images/sign-out.svg'
export default function Dashnav() {
  return (
      <div className='sidebar'>

        <div className='sidebar-brand' style={{textAlign:'center'}}>
          <h4><img src='https://famousclowns.org/wp-content/uploads/2017/11/helmet-of-salvation.png' style={{width:'35px'}}/>
 <span> Church <br/> Quest</span></h4>
        </div>
        <br/>     <br/>

        <div className='sidebar-menu'> 
           <ul>
            <li>
              <Link to="#" className='active'> <span className='las la-igloo'></span> <span>Dashboard</span></Link>
            </li>
           
            <li>
              <Link to="#"><span className='las la-user-plus '></span> <span>Register</span></Link>
            </li>
       
            <li>
              <Link to="#"><span className='las la-users'></span> <span> Members</span></Link>
            </li>
            <li>
              <Link to='#'><span ><img src={teamImage} /></span> <span> Admin Mgt</span></Link>
            </li>
          
            <li>
              <Link to='/portal'><span ><img src={signoutImage} /></span> <span> Log out</span></Link>
            </li>

           </ul>
        </div>

      </div>
      
    
  
  )}
