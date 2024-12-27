import React from 'react'
import { useState, useEffect } from 'react';

function Education() {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    
    
    const newEducation = {startDate, endDate };

    // const updatedEducationList =  newEducation];
    // setEducationList(updatedEducationList);

    // localStorage.setItem("education", JSON.stringify(updatedEducationList));

    setStartDate("");
    setEndDate("");
    setDescription("");


  }
  
  return (
    

      
      <form className="container3  border border-black p-5 " noValidate>
    <h3 className='container4 text-primary'>Education</h3>
    
    <div className="bold p-1"><label htmlFor="validationCustom01" className="form-label">School/Univercity Name:</label>
        <input type="text" name="Title" className="form-control" id="validationCustom01" placeholder='Ex.Rai univercity'  required /></div>

       
    <div className=" bold p-1"><label htmlFor="validationCustom01" className="form-label">Degree:</label>
        <input type="text" name="Employment type" className="form-control" id="validationCustom01" placeholder='Ex.BCA'   required /></div>

       
        {/* <div className=" bold p-1"><label htmlFor="validationCustom01" className="form-label">Filed in study:</label>
        <input type="text" name="Employment type" className="form-control" id="validationCustom01" placeholder='Ex.'   required /></div> */}


  
        <label className='bold' htmlFor="startDate p-1">Start Date:</label>
        <input
          type="month"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-control"
        />
        

        <label className='bold' htmlFor="endDate">End Date (Optional):</label>
        <input
          type="month"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-control"
        />  
       
       <label className='bold' htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          rows={4}
        />
       
       <button className='btn10 btn btn-primary' type="submit">{handleSubmit}Add Education</button>
        </form>
        
       
        
      
   
      
    
  )
}

export default Education