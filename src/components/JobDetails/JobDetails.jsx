import { AiFillDollarCircle } from "react-icons/ai";
import { IoBagSharp } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/Localstorage";

const JobDetails = () => {
      const jobs = useLoaderData();
      const {id} = useParams();
      const idInt = parseInt(id);
      const job = jobs.find(job => job.id === idInt);
      console.log(job);

      const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You Have Applied Successfully');
      }

      
  return (
    <div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <div className=" border md:col-span-3 p-4 ">
          <h2 className=" text-4xl">Details Here : </h2> 
          
          <p>{job.company_name}</p> 
          <h2 className=" text-2xl">Job Description : </h2>
          <p>{job.job_description}</p><p>{job.job_description}</p>
          <h2 className=" text-2xl">Job Responsibility :</h2>
          <p>  {job.job_responsibility}</p>
          <h2 className=" text-2xl">Educational Requirements :</h2>
          <p> {job.educational_requirements}</p>
          <h2 className=" text-2xl">Experience :</h2>
          <p> {job.experiences}</p>


        </div>
        <div className="border p-3">
          <h2 className=" text-2xl">Job Details</h2>
          <h2 className="flex"><AiFillDollarCircle className="text-2xl mr-2"></AiFillDollarCircle>{job.salary}</h2>
          <h2 className=" flex"> <IoBagSharp className="text-2xl mr-2" ></IoBagSharp>Job Details of : {job.job_title}</h2>
          <h2 className=" text-2xl">Contact Information :</h2>
         
          

          <button onClick={handleApplyJob} className=" btn btn-primary w-full mt-4">Apply Now</button>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails;