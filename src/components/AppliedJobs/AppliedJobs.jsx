import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/Localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter =>{
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }
    else if (filter === 'remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
    else if (filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = job.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied)
    }
  }, []);

  return (
    <div>
      <h2 className=" text-2xl">Jobs I have applied: {appliedJobs.length}</h2>

      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>On Site</a>
          </li>
        </ul>
      </details>

      <ul>
        {appliedJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.job_company}:{job.job_remote}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
