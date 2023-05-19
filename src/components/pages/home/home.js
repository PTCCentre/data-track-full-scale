
import React from 'react'
import TopNav from '../../nav/TopNav'
import { Link } from 'react-router-dom'
import mobileApp from '../../assets/images/app_1.png'
import slackImage from '../../assets/images/clients/slack.svg'
import spotifyImage from '../../assets/images/clients/spotify.svg'
import paypalImage from '../../assets/images/clients/paypal.svg'
import samsungImage from '../../assets/images/clients/samsung.svg'
import googleImage from '../../assets/images/clients/google.svg'
import amazonImage from '../../assets/images/clients/amazon.svg'



export default function Home() {

  return (
   
    <div> 
       <header className="foi-header landing-header">
       <TopNav>
    
                        <li className="nav-item mr-2 mb-3 mb-lg-0">
                            <Link className="btn btn-secondary" to="portal">Sign up</Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link className="btn btn-secondary" to="/portal">Login</Link>
                        </li>
       
       </TopNav>
       
       
       <div className="header-content">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Welcome to ChurchQuest</h2>
                        <p className="text-dark">Great app that makes 
                        your church administration feassible & easy 
                          </p>
                      
                        <Link className="btn btn-primary" to="portal">Get Started</Link>
                        <div className="my-2">
                            <p className="header-app-download-title">GET OUR MOBILE APP</p>
                        </div>
                        <div>
                            <button className="btn btn-app-download mr-2">
                              <img src="https://pic.onlinewebfonts.com/svg/img_103664.png" alt="ios" style={{overflow:'hidden'}}/>
                              </button>
                            <button className="btn btn-app-download">
                              <img src="https://th.bing.com/th/id/R.c7f92fc8ed96d918aadee1b51c717ac4?rik=IY7kSGkaQEzCcQ&riu=http%3a%2f%2fsiliconcali.com%2fwp-content%2fuploads%2f2012%2f02%2fblack_android_logo.png&ehk=NuA37h07VaFyJ3G7D2O1Y0RnnkY%2bdKXRtRe7AcrF3SY%3d&risl=&pid=ImgRaw&r=0" alt="ndroid" style={{overflow:'hidden'}}/>
                              </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img src='https://static.wixstatic.com/media/1028fc_8889f37083d94fe495e71727568d6cc9~mv2_d_3570_3411_s_4_2.png/v1/fill/w_510,h_487,al_c,usm_0.66_1.00_0.01/auditor%20transparent-2_PNG.png'  alt="ndroid" className='img-fluid' style={{overflow:'hidden'}}/>

                        
                    </div>
                </div>
            </div>
        </header>
      
    <section className="py-5 mb-5">
    <div className="container">
            <h2 className="section-title">Why ChurchQuest?</h2><br/>
            <div className="row">
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <h5>The <b>Database Management</b> for your church members </h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" class="text-primary mb-5">Find out More</a></p>
                    <h5>Evangelism Aid</h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" class="text-primary mb-5">Find out More</a></p>
                
                    <h5>Church Events-Planning </h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" class="text-primary mb-5">Find out More</a></p>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <h5>First-Timer Followup</h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" class="text-primary mb-5">Find out More</a></p>
                    <h5>Project Management</h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" class="text-primary mb-5">Find out More</a></p>
                </div>
                <div className="col-lg-4">
                    <h6 className="text-gray font-os font-weight-semibold">Trusted by the world's finest churches</h6>
                    <div id="landingClientCarousel" class="carousel slide landing-client-carousel" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="d-flex flex-wrap justify-content-center">
                                    <div className="clients-logo">
                                        <img src={slackImage} alt="Slack" class="img-fluid"/>
                                    </div>
                                    <div className="clients-logo">
                                        <img src={spotifyImage} alt="Spotify" class="img-fluid"/>
                                    </div>
                                    <div className="clients-logo">
                                        <img src={paypalImage} alt="Paypal" class="img-fluid"/>
                                    </div>
                                    <div className="clients-logo">
                                        <img src={amazonImage} alt="Amazon" class="img-fluid"/>
                                    </div>
                                    <div className="clients-logo">
                                        <img src={googleImage} alt="Google" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src={samsungImage} alt="Samsung" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex flex-wrap justify-content-center">
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/slack.svg" alt="Slack" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/spotify.svg" alt="Spotify" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/paypal.svg" alt="Paypal" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/amazon.svg" alt="Amazon" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/google.svg" alt="Google" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/samsung.svg" alt="Samsung" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex flex-wrap justify-content-center">
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/slack.svg" alt="Slack" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/spotify.svg" alt="Spotify" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/paypal.svg" alt="Paypal" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/amazon.svg" alt="Amazon" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/google.svg" alt="Google" class="img-fluid"/>
                                    </div>
                                    <div class="clients-logo">
                                        <img src="assets/images/clients/samsung.svg" alt="Samsung" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol class="carousel-indicators">
                            <li data-target="#landingClientCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#landingClientCarousel" data-slide-to="1"></li>
                            <li data-target="#landingClientCarousel" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
      </div>
    </section>
    </div>
  )
}
