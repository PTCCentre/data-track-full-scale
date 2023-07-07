import React, { Children, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth,logout } from '../pages/portal/firebase-config';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function NavModal({children}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [loading, setLoading]=useState(false)

  const currentUser=useAuth()
  const navigate=useNavigate()
  async function handleLogout(){
    setLoading(true)
    try{
    await logout()
   }
   catch {
       alert('Oops! Please try again')
   }
   setLoading(false)
   navigate('/portal')

   }

  return (
    <>
    
      <span onClick={()=>setShow(true)} className="navbar-toggler-icon"></span>


      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul className="navbar-nav mr-auto mt-2  mt-lg-0">
                        <li className="nav-item active">
                            <Link style={{color:'black'}}  className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li  className="nav-item">
                            <Link style={{color:'black'}}  className="nav-link" to="#">About</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link style={{color:'black'}}  className="nav-link" to="#">Features</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link style={{color:'black'}}  className="nav-link" to="#">contact</Link>
                        </li>
                    </ul> 
                    
               {currentUser && (<div><Button variant="secondary" onClick={handleLogout}>
               <Link  className="nav-link" style={{color:'black'}} to="#">Log Out</Link> 
          </Button>
             <br/><br/>
         <Button variant="secondary" onClick={()=>setShow(false)}>
          <Link className="nav-link" style={{color:'black'}} to="/dashboard">Dashboard</Link> 
          </Button></div>)}

               {!currentUser && (<div><Button variant="secondary" onClick={()=>setShow(false)}>
          <Link className="nav-link" style={{color:'black'}} to="/portal">Log in</Link> 
          </Button>
             <br/><br/>
         <Button variant="secondary" onClick={()=>setShow(false)}>
          <Link className="nav-link" style={{color:'black'}} to="/Portal">Register</Link> 
          </Button></div>)}


           {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

