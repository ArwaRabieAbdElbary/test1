import React from 'react';
import aboutTwo from '../images/about2.png'
import './About.css'

const About = () => {
  return (
    <section className="about-sec">
       <div className="about-overlay">
       <div className="about-content">
         <div className="row">
          
         <div className="col-sm-12 col-md-6 con1">
            <h2>About Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
            <img src={aboutTwo} />  
            <div className="con1-btn">
            <button>Help Me</button>
           </div>  
         </div>

         <div className="col-sm-12 col-md-6 con2">
           <h2>Where</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>


         </div>    
         
         </div>
      
          
          
          </div>
       
       
    
    
    </section>


   
  );
};

export default About;
