import React,{useState,useEffect} from 'react';
import { MdWorkOutline } from 'react-icons/md';

const ResumePreview = ({ resumeDataVal }) => {
  return (     
      <div className="resume-preview f-16 $">
        <div className={`resume-personal d-flex justify-content-between w-100 mb-3 ${resumeDataVal?.firstName !==""?"border-bottom":""}`}>
            <h4 className="mt-3">{resumeDataVal.fullName}</h4>
            <div className='preview-personal-left'>
                <p>{resumeDataVal.email}</p>
                <p className='margin-top-adjust'>{resumeDataVal.phone}</p>
                <p className='margin-top-adjust'>{resumeDataVal.address}</p>
            </div>
        </div>
        <div className={`mb-3 ${resumeDataVal.educationalDetails && Object.keys(resumeDataVal.educationalDetails[0]).length!==0?"border-bottom":""}`}>
        {
          resumeDataVal?.educationalDetails && (   
              resumeDataVal?.educationalDetails.map((item,index)=> (
                Object.keys(item).length?
                <>
                {index===0 &&  <h5 className='mb-3'>Educational Details</h5>}
                <div className='resume-educational d-flex justify-content-between' style={{marginTop:"-0.5rem"}} key={index}>
                  <div>
                    <p className='font-blue fw-bold'>{item?.instituteName?item?.instituteName:"Institute Name"}</p>
                    <div className='d-flex gap-3 '>
                      <p className='margin-top-adjust'>{item?.specialization?item?.specialization:"Specialization"}</p>
                      <p className='margin-top-adjust font-blue'>{item?.educationPercentage?(item?.educationPercentage + "%"):"Percentage"}</p>
                    </div>
                  </div>
                  <div className='d-flex gap-3 '>
                    <p>{item?.educationStartYear?item?.educationStartYear:"Year"} - </p>
                    <p>{item?.educationEndYear?item?.educationEndYear:"Year"}</p>
                  </div>
                </div>
                </>
                :<></>         
              ))
          )  
        }  
        </div> 
        {
        (resumeDataVal.experienceData && Object.keys(resumeDataVal.experienceData[0]).length!==0) && ( <h5 className='mb-2'>Experience Details</h5>)
        }
        <div className={`d-flex justify-content-between gap-5 ${resumeDataVal.experienceData && Object.keys(resumeDataVal.experienceData[0]).length!==0?"border-bottom":""}`}> 
        {
          resumeDataVal?.experienceData && (
            resumeDataVal?.experienceData.map((item,index)=> (
              Object.keys(item).length?
                <>
                    <div className='resume-experience'>
                      <div className='d-flex gap-3'>
                        <p className='font-blue fw-bold'>{item?.companyName?item?.companyName:"Company Name"}</p>
                        <p className=''>{item?.mode?(" -  "+item?.mode):"- Mode Type"}</p>
                      </div>
                      <div className='d-flex gap-3 '>
                        <p className='margin-top-adjust'>{item?.role?item?.role:"Company Role"}</p>
                        <p className='margin-top-adjust font-blue'><MdWorkOutline/> {item?.experience?(item?.experience):"Experience"}</p>
                      </div>
                      <p className='f-14' style={{marginTop:"-0.6rem"}}>{item?.description?item?.description:"Description"}</p>
                    </div>
                </>:
                <>
                </>
            )
            )
          )
        }   
        </div> 
        <div>
          {(resumeDataVal.skills && resumeDataVal.skills.length) ?
            <>
            <h5 className='mb-2 mt-3'>Skils</h5>
              <ul className='d-flex gap-1 flex-wrap'>
              {
                (resumeDataVal.skills)? (
                  resumeDataVal?.skills.map((item,index)=>(
                    <li key={index} className='ms-5'>{item}</li>
                  ))
                ):<></>
                  }
              </ul>
          </>:<></>
          }
        </div>
      </div>
  )
}

export default ResumePreview

