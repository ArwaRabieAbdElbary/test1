import React from 'react'
import Card from 'react-bootstrap/Card';
import imgOne from '../images/1.png'
import imgTwo from '../images/2.png'
import './Service.css'
const Service = () => {
  return (
    <section className="service-sec">
       <h2>Services</h2>
       <div className="container">
          <div className="row">
             <div className="col-sm-12 col-md-4 ser-card">

                 <Card>
                   <Card.Img variant="top" src={imgOne} />
                   <Card.Body>
                     <Card.Title>Lorem Ipsum</Card.Title>
                     <Card.Text>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       when an unknown printer took a galley of type and scrambled
                     </Card.Text>
    
                   </Card.Body>
                 </Card>
             </div>  
             <div className="col-sm-12 col-md-4 ser-card">

             <Card>
               <Card.Img variant="top" src={imgTwo} />
               <Card.Body>
                 <Card.Title>Lorem Ipsum</Card.Title>
                 <Card.Text>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled
                 </Card.Text>

               </Card.Body>
             </Card>
         </div>  
         <div className="col-sm-12 col-md-4 ser-card">

         <Card>
           <Card.Img variant="top" src={imgOne} />
           <Card.Body>
             <Card.Title>Lorem Ipsum</Card.Title>
             <Card.Text>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled
             </Card.Text>
           </Card.Body>
         </Card>
        </div>  
          
          </div>

          <div className="row">
             <div className="col-12">
               <div className="btnHelp">
                  <button>Help Me</button>
               </div>
             </div>
          </div>
       </div>
    
    
    </section>
  )
}

export default Service