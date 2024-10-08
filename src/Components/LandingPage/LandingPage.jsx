import React from 'react'
import './LandingPage.css'

export const LandingPage = () => {
  return (
    <div>
        <div className='topBar'>
            <div className='title'>PlotPicks</div>
            <div className='auth-container'>
                <div className='Login'>Login</div>

                <div className='SignUp'>Sign up</div>
            </div>
        </div>
        <div className='imageBackground'>
            <div className='getStartedContatiner'>
              <div className='DisplayText'>
              Curate Your Dream Library, One Wish at a Time.
              </div>
              <div className='getstartedCont'>
              <div className='getStarted'>
                Get started
              </div>
              </div>
              
            </div>
        </div>
        <div className='aboutContainer'>
            <h1 class="about-title">Build. Add. Share.</h1>
            <div class="about-description">
              <p>Create as many wish lists, add all the books you want</p>
              <p>Add books easily from the website</p>
              <p>Share your wish list with others</p>
            </div>
          </div>
    </div>
    
  )
}

export default LandingPage