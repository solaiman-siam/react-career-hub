import { useLoaderData } from "react-router-dom"
import { getJobApplication } from "./Utility/utility"
import { useEffect, useState } from "react";
import AppliedJob from "./components/AppliedJob";

function AppliedJobs() {
  
  const jobs = useLoaderData()
  const [appliedJobs, setAppliedJobs] = useState([])
  
  useEffect(() => {
    const storedId = getJobApplication()
    console.log(storedId, jobs);
    if(jobs.length > 0) {
       const jobApplied = jobs.filter( job => storedId.includes(job.id))
       setAppliedJobs(jobApplied)
    }
},[])


  return ( 
    <div className="pt-20 ">
      <h1 className="text-center text-3xl font-extrabold py-20 bg-[#f5f5f5]">Applied Jobs</h1>
      <div className="my-24 grid gap-6">
      {
        appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
      }
      </div>
    </div>
  )
}

export default AppliedJobs