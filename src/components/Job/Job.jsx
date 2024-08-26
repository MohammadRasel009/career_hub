const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary,  job_description, job_responsibility, educational_requirements, experiences,  } = job;
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
        <p>{location}</p>
        <p>Job Description : {job_description}</p>
        <p> Job Responsibility : {job_responsibility}</p>
        <p>Educational Requirements : {educational_requirements}</p>
        <p>Experience : {experiences}</p>
        <p>{salary}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
