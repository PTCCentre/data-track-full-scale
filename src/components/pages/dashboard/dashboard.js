import React, { useEffect } from 'react'
import './css/Dashnav.css'
import './css/Dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../portal/firebase-config'

import guestImage from '../../assets/images/guest-list.png'
import membersImage from '../../assets/images/members.png'

import Dashnav from './Dashnav'
export default function Dashboard() {
  const navigate=useNavigate()

  const currentUser=useAuth()
 
  return (
    <div className='dashboard'>
      
      <input type="checkbox" id="nav-toggle" />
    <Dashnav/>

    <div className='main-content'>
              <header>
              <div> <h3>
                <label for='nav-toggle'><span className='las la-bars'> </span></label>  
                  Dashboard
                </h3>    
                 </div>
                
                <div className='search-wrapper'>
                  <span class='las la-search'></span>
                  <input type='search' placeholder='Search member'/>
                </div>
                <div className='user-wrapper'>
                  <img src='https://developers.tech2biz.net/images/frontend/default-user-male.png' width='40px' height='40px' alt=''/>
                  <div>

                  <p style={{fontSize:'9px'}}>{ currentUser ?.email}</p>
                <small>Super Admin</small>
                  </div>
                </div>
               
              </header>

              <main className='main'>
                  <div className='cards'>
                  
                    <div className='card-single'>
                      <div>
                        <h1>54</h1>
                        <span>Guest</span>
                      </div>
                      <div>
                        <span ><img src={guestImage} height='50px'/></span>
                      </div>
                    </div>
                  
                    <div className='card-single'>
                      <div>
                        <h1>154</h1>
                        <span>Retained</span>
                      </div>
                      <div>
                        <span > <img src={membersImage} height='50px'/></span>
                      </div>
                    </div>

                    <div className='card-single'>
                      <div>
                        <h1>108</h1>
                        <span>Total Members</span>
                      </div>
                      <div>
                        <span className='las la-users'></span>
                      </div>
                    </div>
                       


                  </div>
                </main>
          

        </div>
         
    </div>
  )
}
