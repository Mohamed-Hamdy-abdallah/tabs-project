import React, { useState } from 'react'
import useFetch from './useFetch';
import './App.css';
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const {data , err , loading}=useFetch(url);
  const [value,setValue]=useState(0);
  
  
   


    return  (
      <div >
          
      {loading && <h2>Loading data...</h2> }
       {err && <div>{err}</div>}
      

       

          { data &&   <section className="section">
           <div className="title">
             <h2>experience</h2>
             <div className="underline"></div>
           </div>
           <div className="jobs-center">
             {/* btn container */}
             <div className="btn-container">
               {data.map((item, index) => {
                 return (
                   <button
                     key={item.id}
                     onClick={() => setValue(index)}
                     className={`job-btn ${index === value && 'active-btn'}`}
                   >
                     {item.company}
                   </button>
                 )
               })}
             </div>
             {/* job info */}
             <article className="job-info">
               <h3>{data[value].title}</h3>
               <h4>{data[value].company}</h4>
               <p className="job-date">{data[value].dates}</p>
               {data[value].duties.map((duty, index) => (
                 
                   <div key={index} className="job-desc">
                     <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                     <p>{duty}</p>
                   </div>
                 
               ))}
             </article>
           </div>
           <button type="button" className="btn">
             more info
           </button>
         </section>}
         </div>

            
           
       
    )
}


export default App