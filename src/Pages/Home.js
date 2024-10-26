import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAmbulance} from '@fortawesome/free-solid-svg-icons'
import imgHome from '../images/home.jfif'



const Home = () => {
  return (
    <main>
      <div className="img-home"> 
        <img src={imgHome} />
        
      
      </div>

      <div className="content-home">

        <div className="top-home">
        <div className="icon-home">
          <FontAwesomeIcon icon={faAmbulance} />
        </div>
      
        <div className="text-home">
          <h4>Round Rock</h4>
          <h5>Trush Hauling</h5>
        </div>
      </div>

      <div className='bottom-home'>
          <button className='btn1'>Experts</button>
          <p className='first-par'>lorem</p>
          <h1>Lorem lorem</h1>
          <p className='second-par'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <button className='btn2'>Help Me</button>
      </div> 
      
      
      
      
      </div>

    </main>
  )
}

export default Home