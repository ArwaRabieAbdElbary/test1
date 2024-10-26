import React from 'react'
import './Testymonial.css'
import person from '../images/img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Testymonial = () => {
  return (
    <section className='Testymonial-sec'>
      <h2>Testymonials</h2>
      <div className='container'>
         <div className='row'>
            <div className='col-sm-12 col-md-6 Testymonial-all'>
              <div className='testymonial-img'>
                <img src={person} />
              </div>
              <div className='testymonial-text'>
                <h3>Courtney Henry</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>

            <div className='col-sm-12 col-md-6 Testymonial-all'>
                <div className='testymonial-img'>
                 <img src={person} />
                </div>
                <div className='testymonial-text'>
                 <h3>Courtney Henry</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
         </div>

         <div className='row'>
         <div className='col-sm-12 col-md-6 Testymonial-all'>
           <div className='testymonial-img'>
             <img src={person} />
           </div>
           <div className='testymonial-text'>
             <h3>Courtney Henry</h3>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
             <FontAwesomeIcon icon={faStar} />
             <FontAwesomeIcon icon={faStar} />
             <FontAwesomeIcon icon={faStar} />
             <FontAwesomeIcon icon={faStar} />
             <FontAwesomeIcon icon={faStar} />
           </div>
         </div>

         <div className='col-sm-12 col-md-6 Testymonial-all'>
             <div className='testymonial-img'>
              <img src={person} />
             </div>
             <div className='testymonial-text'>
              <h3>Courtney Henry</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
             </div>
         </div>
      </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         </div>
    </section>
    
  )
}

export default Testymonial