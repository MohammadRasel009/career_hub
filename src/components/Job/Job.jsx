import { IoLocation } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary,  job_description, job_responsibility, educational_requirements, experiences,  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className=" mt-6"
          src={logo}
          alt="Brand Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="mt-4 flex gap-4">
          <h2 className="flex"><IoLocation className="text-2xl mr-2"></IoLocation>{location}</h2>
          <h2 className="flex"><AiFillDollarCircle className="text-2xl mr-2"></AiFillDollarCircle>{salary}</h2>
        </div>
        <p>Job Description : {job_description}</p>
        <p> Job Responsibility : {job_responsibility}</p>
        <p>Educational Requirements : {educational_requirements}</p>
        <p>Experience : {experiences}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
        </div>
        
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
