import React,{useEffect, useState} from 'react';
import '../css/Dashnav.css'
import '../css/Dashboard.css'
import '../members/members.css'
//import firebase from 'firebase/compat';
import Searchbar from '../Searchbar';
import Dashnav from '../Dashnav';
import membersImage from '../../../assets/images/members.png'
import { Link } from 'react-router-dom';
import {useAuth} from '../../portal/firebase-config'
import { projectFirestore } from '../../portal/firebase-config';
import { fireDbRef } from '../../portal/firebase-config';
import {query, collection, where, getDocs, getCountFromServer } from "firebase/firestore";

import { useLocation } from 'react-router-dom';
import Footer from '../../../nav/Footer';
export default function Search() {
//  const searchQuery=queryParams.get('q')
  //const q=query(collection(projectFirestore,"recipes"), where ("name", "==", query))
 
  const [details, setDetails]=useState({})
  const [count,setCount]=useState(null)
  const currentUser=useAuth()

  const useQuery=()=>{
    const queryString=useLocation().search
    const queryParams=new URLSearchParams(queryString)
    return queryParams
  }
  
  let Query=useQuery()
  let search=Query.get("q")
 useEffect(()=>{
  

  searchDatabase()

 },[search])
 
 const searchDatabase=()=>{
  fireDbRef.child("members").orderByChild("firstName").equalTo(search).on("value", (snapshot)=>{
    if(snapshot.val()){
    
      const results=snapshot.val()
      const counter=snapshot.numChildren()
      setDetails(results)
      setCount(counter)
      console.log(snapshot.numChildren())
    }
  })
 }

/*
  const searchDatabase= async (search)=>{
    
    try
    {
     
      const q=query(collection(projectFirestore,"membership"), where('name', "==", search))
      const querySnapshot = await getDocs(q)
     const results= querySnapshot.forEach((details)=> {console.log(details.id, " => " , details.data()  ) })
     setSearchResults(results)
     alert(results)
    }

      // const results=querySnapshot.docs.map((docs)=>docs.data())
     catch(error){
      console.log('Error searching member database:' , error )
    }
  }
*/
  return (
   
  
     <div className='dashboard'>
      <input type="checkbox" id="nav-toggle" />

      <Dashnav/> 
      <div className='main-content'>
      <header >
              <div > <h3>
                <label for='nav-toggle'><span className='las la-bars'> </span></label>  
                 <span className='dashboard-text'> </span>
                </h3>    
                 </div>

               
                <Searchbar />

                <div className='user-wrapper'>
                  <img src='https://developers.tech2biz.net/images/frontend/default-user-male.png' width='40px' height='40px' alt=''/>
                  <div>
               
                  <p style={{fontSize:'9px'}}>{ currentUser ?.email}</p>
                <small>Super Admin</small>
                  </div>
                </div>
               
              </header>
           </div>

          
           <main className='main'>
            
            <div className='cards'>
            {Object.keys(details).map((id, index)=>{
              return (
             <div key={id} className='card-single'>
               <div >
                 <p ><i class="las la-user" aria-hidden="true"></i> {details[id].firstName} {details[id].lastName} {}</p>
                  <p><i class="las la-phone" aria-hidden="true"></i> {details[id].number}</p>
                 <p><i class="las la-envelope" aria-hidden="true"></i>  {details[id].email}</p>          
                </div>      
            </div>
             )} )}
                 <div className='card-single'>
                    <div>
                      <h3>{count}</h3>
                       <span>Result(s) Found</span><br/>
                  </div>      
                  <div>
                    <span  className='member-icon'  > <Link to="#"><img src={membersImage} height='50px'/> </Link></span>
                  </div>
                </div>
           </div>
          </main>
   </div>
      
       
       
  )
}
