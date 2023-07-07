import React, { useEffect, useState } from 'react'
import '../css/Dashnav.css'
import './members.css'
import '../css/Dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../../portal/firebase-config'
import { projectFirestore } from '../../portal/firebase-config'

import guestImage from '../../../assets/images/guest-list.png'
import membersImage from '../../../assets/images/members.png'
import Dashnav from '../Dashnav'

import teamImage from '../../../assets/images/teams.svg'
import signoutImage from '../../../assets/images/signout.svg'

import handleLogout from '../Dashnav'
import Searchbar from '../Searchbar'
export default function Members() {
    const [error, setError]=useState(false)
    const [loading, setLoading]=useState(false)
    const [details,setDetails]=useState(null)
    const currentUser=useAuth()
    const navigate=useNavigate()
  
         useEffect(()=>{
          setLoading(true)
          
    

         const unsub=projectFirestore.collection('membership').onSnapshot((snapshot)=>{
          //
            console.log(snapshot)
            if(snapshot.empty){
               setError('No members to load')
               setLoading(false)
            }
            else{
              let results=[]
              snapshot.docs.forEach(doc=>{
                results.push({id:doc.id, ...doc.data()})
              })
              setDetails(results)
              setLoading(false)
            }
          } , (err)=>{ 
             setError(err.message)
             setLoading(false)
          })

          return ()=>unsub()
        },[])

  return (

    <div className='dashboard'>
      
      <input type="checkbox" id="nav-toggle" />

      <Dashnav/>

       
    <div className='main-content'>
              <header>
              <div> <h3>
                <label for='nav-toggle'><span className='las la-bars'> </span></label>  
                </h3>    
                 </div>

              <Searchbar/>
                <div className='user-wrapper'>
                  <img src='https://developers.tech2biz.net/images/frontend/default-user-male.png' width='40px' height='40px' alt=''/>
                  <div>

                  <p style={{fontSize:'9px'}}>{ currentUser ?.email}</p>
                <small>Super Admin</small>
                  </div>
                </div>
               
              </header>
           </div>

           {error && <p className='error'>{error}</p>}
            {details && (


           <main className='main'>
            
                  <div className='cards'>
                  {loading &&
                  <div className='card-single'>
                    <div>
                      <h3>Loading</h3>
                       <span>Total retained</span><br/>
                  </div>      0
                  <div>
                    <span  className='member-icon'  > <Link to="#"><img src={membersImage} height='50px'/> </Link></span>
                  </div>
                </div> }

                     {details.map(detail=>(<div key={detail.id} className='card-single'>
                      <div>
                        <p><i class="las la-user" aria-hidden="true"></i> {detail.name}</p>
                        <p><i class="las la-phone" aria-hidden="true"></i> {detail.number}</p>
                        <p><i class="las la-envelope" aria-hidden="true"></i>  {detail.email}</p>
                        <span>{detail.unit} Retained</span><br/>
                       
                      </div>      
                      <div>
                        <span className='member-icon' > <Link to="#"><img  src={membersImage} height='50px'/> </Link></span>
                      </div>
                    </div>))}
                    
                    <div className='card-single'>
                    <div>
                      <h3>100</h3>
                       <span>Total retained</span><br/>
                  </div>      
                  <div>
                    <span  className='member-icon'  > <Link to="#"><img src={membersImage} height='50px'/> </Link></span>
                  </div>
                </div>
                {loading &&  <div className='card-single'>
                    <div>
                      <h3>Loading Components</h3>
                       <span>.....</span><br/>
                  </div>      
                  <div>
                    <span  className='member-icon'  > <Link to="#"><img src={membersImage} height='50px'/> </Link></span>
                  </div>
                </div>}
                
                  </div>
              
                 

               

            
                  
      
                  </main>
            )}
        </div>
      
  )
}