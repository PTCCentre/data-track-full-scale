import React, { useEffect, useState } from 'react'
import './css/Dashnav.css'
import './css/Dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import {fireDbRef, useAuth} from '../portal/firebase-config'
import { projectFirestore } from '../portal/firebase-config'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import plusImage from '../../assets/images/plus-circle.svg'
import guestImage from '../../assets/images/guest-list.png'
import membersImage from '../../assets/images/members.png'
import Dashnav from './Dashnav'
import MemberModal from './Member-modal'
import Searchbar from './Searchbar'

export default function Dashboard() {
  const[firstName,setFirstName]=useState(null)
  const[lastName,setLastName]=useState(null)
  const[email , setEmail]=useState(null)
  const [number,setNumber]=useState(null)
  const [address,setAdress]=useState(null)
  const [unit,setUnit]=useState(null)
  const [occupation,setOccupation]=useState(null)

  const [error, setError]=useState(false)
  const [loading, setLoading]=useState(false)
  const [details,setDetails]=useState(null)
  const currentUser=useAuth()
  const navigate=useNavigate()



 const handleSubmit=async(e)=>{
 e.preventDefault()
 console.log(firstName, lastName, email, number, address,unit)
 const doc= {firstName, lastName, email, number, address,unit} 
alert('Member Detail Submitted')
 try{
// await projectFirestore.collection('membership').add(doc)
 //alert('Member details submitted')

await fireDbRef.child("members").push(doc)
 
}catch(err){
  console.log(err)
}
}



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

              
                <Searchbar/>

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
                        <span>Guest</span><br/>
                        <MemberModal>
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                               <Form.Control type="text"  placeholder="Kindly input your name" />
                              <br/>
                               <Form.Control type="number"  placeholder="Your phone number" />
                               <br/>
                               <Form.Control type="email"  placeholder="name@example.com" />
                               <br/>
                               <Form.Control type="text"  placeholder="Address" />
                                 <br/>
                               <Form.Control type="text" placeholder='Single / Married / Diversed'  />
                                  <br/>
                               <Form.Control type="text" placeholder='kindly input your age group'  />
                                   <br/>
                                <Form.Control type="text" placeholder='would like to be a part of our church?'  />
                                <br/>
                              <Form.Control type="text" placeholder='Who invited you?'  />
                              <br/>
                            <Form.Label>What you like about our church?</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                           </Form.Group>
                           <Button variant="primary"> Submit Detail </Button>
                           
                        </Form>
                        </MemberModal>
                      </div>      
                      <div>
                        <span > <Link to="#"><img src={guestImage} height='50px'/> </Link></span>
                      </div>
                    </div>
                  

                    <div className='card-single'>
                      <div>
                        <h1>254</h1>
                        <span>Congregation</span><br/>
                        <MemberModal>
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                               <Form.Control type="email"  placeholder="name@example.com" />
                        </Form.Group>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                           </Form.Group>
                           <Button variant="primary"> Submit Detail </Button>

                        </Form>
                        </MemberModal>

                      </div>
                      <div>
                        <span > <img src={membersImage} height='50px'/> </span>
                      </div>
                    </div>

                    <div className='card-single'>
                      <div>
                        <h1>354</h1>
                        <span>Retained  </span><br/>
                        <MemberModal>
                        <form onSubmit={handleSubmit}>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
                              <Form.Label>First Name</Form.Label>
                               <Form.Control type="text" onChange={(e)=>setFirstName(e.target.value)}  placeholder="Pls input your first name" />
                               <Form.Label>Last Name</Form.Label>
                               <Form.Control type="text" onChange={(e)=>setLastName(e.target.value)}  placeholder="Pls input your last name" />
                              
                              
                               <br/>
                              
                               <Form.Label>Number</Form.Label>
                               <Form.Control type="number"  onChange={(e)=>setNumber(e.target.value)}  placeholder="Your phone number" />
                              
                               <br/>
                               <Form.Label>Email address</Form.Label>
                               <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="name@example.com" />
                               <br/>
                               <Form.Label>Address</Form.Label>
                               <Form.Control type="text" onChange={(e)=>setAdress(e.target.value)} placeholder="Your residential address" />
                              <br/>
                              
                              <Form.Label>Unit</Form.Label>
                               <Form.Control type="text" onChange={(e)=>setUnit(e.target.value)} placeholder="Your role in the churchy" />
                              <br/>
                               <Form.Label>Occupation</Form.Label>
                               <Form.Control type="text" onChange={(e)=>setOccupation(e.target.value)}  placeholder="You can add your multiple occupation" />
                       
                               <br/>

                        </Form.Group>
                        <Button  disabled={loading} type="submit" variant="primary"> Submit Details </Button>

                        </form>
                        </MemberModal>

                      </div>
                      <div>
                        <span > <img src={membersImage} height='50px'/></span>
                      </div>
                    </div>


                    <div className='card-single'>
                      <div>
                        <h1>612</h1>
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
