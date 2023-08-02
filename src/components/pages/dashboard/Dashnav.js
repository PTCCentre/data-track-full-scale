import { useEffect, useState } from 'react'
import {useAuth} from '../portal/firebase-config'

import {Link , useNavigate} from 'react-router-dom'
import { logout } from '../portal/firebase-config'
import teamImage from '../../assets/images/teams.svg'
import guest from '../../assets/images/guest.svg'
import signoutImage from '../../assets/images/signout.svg'
export default function Dashnav(handleLogout) {
const currentUser=useAuth();
const navigate=useNavigate();
const [loading, setLoading]=useState(false);
   

  async function handleLogout(){
    setLoading(true)
    try{
    await logout()
   }
   catch {
       alert('error!')
   }

   setLoading(false)
   navigate('/portal')

   }

  return (
      <div className='sidebar'>

        <div className='sidebar-brand' style={{textAlign:'center'}}>
          <h4><img src='https://ptccentre.org/wp-content/uploads/2020/01/web-logo-1.png' style={{width:'55px'}}/>
                <span>Potters Transformation  Christian Center</span></h4>
        </div>
        <br/>     <br/>        <br/>

        <div className='sidebar-menu'> 
           <ul>
            <li>
              <Link to="/dashboard" className='active'> <span className='las la-igloo'></span> <span>Dashboard</span></Link>
            </li>
           
            <li>
              <Link to="/guests"><span className='las la-user-plus '></span> <span>Register</span></Link>
            </li>
       
            <li>
              <Link to="/members"><span className='las la-users'></span> <span> Members</span></Link>
            </li>

            
            <li>
              <Link to='#'><span ><img src={teamImage} /></span> <span> Admin Mgt</span></Link>
            </li>
          
            <li>
              <Link to='/portal' onClick={handleLogout}><span ><img src={signoutImage} /></span> <span> Log out</span></Link>
            </li>

           </ul>
        </div>

      </div>
      
  )}
