import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../../images/banner2.jpg'
const About = () => {
    return (
     <div className="container">
            <div className='row justify-content-center align-items-center p-5'>
            <div className="col-md-5 p-3">
                <img src={pic} alt="" className='img-fluid' />
            </div>
            <div className="col-md-7 p-3" style={{textAlign: 'justify'}}>
               <h3>Creative Team that Gets Excited About</h3>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum accusantium sit laudantium, incidunt quas ipsa perspiciatis eaque itaque et placeat ex illo. Sed corrupti maiores quod, expedita dolore quae dolores error iure placeat commodi, aliquid nihil magni beatae! Deserunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni veniam ut non. Nostrum et laboriosam culpa ullam facere est voluptate incidunt labore quia possimus, officia, ad dolorum illo quis ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloremque maxime hic laboriosam dignissimos officiis nihil ad obcaecati? Quaerat facilis.</p>
               <NavLink to='*'><button className='btn btn-danger'>Learn More</button></NavLink>
            </div>
            
        </div>
    </div>
    );
};

export default About;