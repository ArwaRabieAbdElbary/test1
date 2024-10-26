import React from 'react'
import './Contact.css'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons/faVoicemail'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section className="contact">
       <div className="container">
           <h2>Contact Us</h2>
           <div className='row'>
             <div className="col-sm-12 col-md-6">
               <Form>
                 <input type="text" className="form-control" placeholder="Name" />
                 <input type='email' className="form-control" placeholder="Email" />
                 <input type="text" className="form-control" placeholder="Phone" />
                 <div className="form-btn">
                    <button>Send</button>
                 </div>
                 
               </Form>
             </div>

             <div className="col-sm-12 col-md-6">
                <div className="contact-text">
                  <p> <FontAwesomeIcon icon={faEnvelope} /> 
                    <a href='#'>upskilling.eg1@gmail.com</a>
                  </p>
  
                  <p> <FontAwesomeIcon icon={faPhone} />
                  +20 115 493 2137</p>
                
                </div>
             </div>   
           </div>

       </div>

       <div className="last-sec"></div>
    </section>
    
  )
}

export default Contact