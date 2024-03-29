import React from 'react'
import { Link } from 'react-router-dom'
import ptcc from '../assets/images/ptcc.png'

import NavModal from './Nav-modal'
export default function TopNav({children}) {
  return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                <Link className="navbar-brand" to="/"> <img src={ptcc} style={{marginTop:'20px', width:'55px'}}/>
                    <b  style={{lineHeight:'20px',fontSize:'15px' }}>

                   <span style={{display:'inline-flex'}}></span> </b>
                </Link>
                
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                   <NavModal/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2  mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Features</Link>
                        </li>
                      
                        <li className="nav-item">
                            <Link className="nav-link" to="#">contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        {children}
                    </ul>
                </div>
            </nav>

        </div>
  )
}