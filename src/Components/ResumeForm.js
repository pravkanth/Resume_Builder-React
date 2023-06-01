import React, {useState ,useEffect} from 'react'
import { ImBin } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TagInput from 'react-tag-autocomplete';
import SuggestionData from '../data';

const ResumeForm = ({onFormChange}) => {
    const [resumeData,setResumeData] = useState({
        firstName:"",lastName:"",email:"",phone:"",address:"",
        educationalDetails:[{},{},{}],experienceData:[{},{},{}],skills:[]
        
    }) 
    const [educationalAnotherCount, setEducationalAnotherCount] = useState([1]);
    const [experienceAnotherCount, setExperienceAnotherCount] = useState([1]);

    const handleEducationalAddAnother = () => {
        if(educationalAnotherCount.length>2){
            toast.error("3 Educational Details are enough to impress Recruiters", {position: "bottom-right"});
        }else{
            setEducationalAnotherCount(prev => [...prev, prev[prev.length - 1] + 1 ]);
            toast.success("Added!!!", {position: "bottom-right"});
        }
      }
    const removeEducationalAddAnother = (idx) => {
        if(educationalAnotherCount.length > 1){
            let newCount = educationalAnotherCount.slice(0,-1);
            setEducationalAnotherCount(newCount);
            let temp = resumeData.educationalDetails
            temp[idx] = {}
            setResumeData({...resumeData,educationalDetails:temp})
            toast.error("Deleted !!!", {position: "bottom-right",})
        }
    }
    const educationalDetailsFn = (e,index)=>{
        let temp = resumeData.educationalDetails
        temp[index][e.target.name] = e.target.value
        setResumeData({...resumeData,educationalDetails:temp})
    }

    const handleExperienceAddAnother = () => {
        if(experienceAnotherCount.length>1){
            toast.error("2 Experience Details are enough to impress Recruiters", {position: "bottom-right"});
        }else{
            setExperienceAnotherCount(prev => [...prev, prev[prev.length - 1] + 1 ]);
            toast.success("Added!!!", {position: "bottom-right"});

        }
      }
    const removeExperienceAddAnother = (idx) => {
        if(experienceAnotherCount.length > 1){
            let newCount = experienceAnotherCount.slice(0,-1);
            setExperienceAnotherCount(newCount);
            let temp = resumeData.experienceData
            temp[idx] = {}
            setResumeData({...resumeData,experienceData:temp})
            toast.error("Deleted !!!", {position: "bottom-right",})
        }
    }
    const ExperienceDetailsFn = (e,index)=>{
        let temp = resumeData.experienceData
        temp[index][e.target.name] = e.target.value
        setResumeData({...resumeData,experienceData:temp})
    }
    useEffect(()=>{
        if(resumeData.firstName !==""){
            let data = resumeData
            data['fullName'] = data.firstName +" "+data.lastName
            onFormChange(data);
        }
    },[resumeData])

    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState(SuggestionData);
  
    const handleDelete = (index) => {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setTags(newTags);
      let temp = resumeData.skills
      temp.splice(index, 1);
      setResumeData({...resumeData,skills:temp})
    };
  
    const handleAddition = (tag) => {
      let temp = resumeData.skills
      if(!temp.includes(tag.name)){
        temp.push(tag.name)
        setTags([...tags, tag]);
        setResumeData({...resumeData,skills:temp})
      }
    };

  return (
    <div className='resume-form'>
        <h3>Hi there , Create your resume here !!!</h3>
        <form className='builder mt-3'> 
            <div>
                <h5>Personal Details</h5>   
                <div className='builder-div mb-3'>
                    <input className='form-input' type="text" id="firstName" name="firstName" placeholder='Enter first Name' onChange={(e)=>setResumeData({...resumeData,firstName:e.target.value})} required/>
                    <input className='form-input' type="text" id="lastName" name="lastName" placeholder='Enter last Name' onChange={(e)=>setResumeData({...resumeData,lastName:e.target.value})} required/>
                    <input className='form-input' type="email" id="email" name="email" placeholder='Enter Email' onChange={(e)=>setResumeData({...resumeData,email:e.target.value})} required/>
                    <input className='form-input' type="number" id="number" name="number" placeholder='Enter mobile number' onChange={(e)=>setResumeData({...resumeData,phone:e.target.value})} required/>
                    <textarea  className='form-textarea form-input' id="address" name="address" placeholder='Enter your full address here...' onChange={(e)=>setResumeData({...resumeData,address:e.target.value})} required></textarea>
                </div>
            </div>
            <div>
                <h5>Educational Details</h5>
                <button className='add-btn mb-3' onClick={handleEducationalAddAnother}>+ Add Educational Details</button>
                {educationalAnotherCount.map((_, idx) => 
                    <div className='builder-div mb-3' key={idx}>
                        <input className='form-input' type="text" id="instituteName" name="instituteName" placeholder='Enter Institute Name' onChange={(e)=> educationalDetailsFn(e,idx)} required/>
                        <input className='form-input' type="text" id="specialization" name="specialization" placeholder='Enter Specialization' onChange={(e)=>educationalDetailsFn(e,idx)} required/>
                        <input className='form-input' type="number" id="educationStartYear" name="educationStartYear" min="1980" max="2023" placeholder='Enter Start year(Eg: 2019)' onChange={(e)=>educationalDetailsFn(e,idx)} required/>
                        <input className='form-input' type="number" id="educationEndYear" name="educationEndYear" min="1980" max="2033" placeholder='Enter End year(Eg: 2023)' onChange={(e)=>educationalDetailsFn(e,idx)} required/>
                        <input className='form-input' type="number" id="educationPercentage" name="educationPercentage" min="0" max="100" placeholder='Enter Percentage(Eg: 86)' onChange={(e)=>educationalDetailsFn(e,idx)} required/>
                        {
                        (educationalAnotherCount.length>1 && idx!==0) && (
                            <ImBin className='delete-btn ms-3 mt-1' onClick={() => removeEducationalAddAnother(idx)} style={{cursor:"pointer"}} />
                        ) 
                        }
                    </div>
                )}
            </div>
            <div>
                <h5>Experience</h5>
                <button className='add-btn mb-3' onClick={handleExperienceAddAnother}>+ Add Experience Details</button>
                {experienceAnotherCount.map((_, idx) => 
                    <div className='builder-div mb-3' key={idx}>
                        <input className='form-input' type="text" id="companyName" name="companyName" placeholder='Enter company Name' onChange={(e)=> ExperienceDetailsFn(e,idx)} required/>
                        <input className='form-input' type="text" id="role" name="role" placeholder='Enter Role' onChange={(e)=>ExperienceDetailsFn(e,idx)} required/>
                        <input className='form-input' type="number" id="experience" name="experience" min="0" max="30" placeholder='Enter Experience' onChange={(e)=>ExperienceDetailsFn(e,idx)} required/>
                        <input className='form-input' type="text" id="mode" name="mode" placeholder='Enter Mode' onChange={(e)=>ExperienceDetailsFn(e,idx)} required/>
                        <textarea  className='form-textarea form-input' id="description" name="description" placeholder='Enter Job description...' onChange={(e)=>ExperienceDetailsFn(e,idx)} required></textarea>
                        {
                        (experienceAnotherCount.length>1 && idx!==0) && (
                            <ImBin className='delete-btn ms-2 mt-2' onClick={() => removeExperienceAddAnother(idx)} style={{cursor:"pointer"}} />
                        ) 
                        }
                    </div>
                )}
            </div>
            <div>
                <h5>Skills</h5>
                <p className='temp'>
                    <TagInput
                        tags={tags}
                        suggestions={suggestions}
                        onDelete={handleDelete}
                        onAddition={handleAddition}
                    />
                </p>
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default ResumeForm