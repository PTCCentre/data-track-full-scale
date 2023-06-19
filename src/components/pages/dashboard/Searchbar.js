import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/Dashboard.css'

export default function Searchbar(){
    const [term,setTerm]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/search?q='+term)
    }
    
    return (
        <div className='search-wrapper'>
            <form onSubmit={handleSubmit}> 
        <span className='las la-search'></span>
        <input type='search' placeholder='Search member' onChange={(e)=>setTerm(e.target.value)}/>
        </form>
      </div>
    )
}