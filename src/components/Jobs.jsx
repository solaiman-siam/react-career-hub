import { useEffect, useState } from "react"
import Job from "./Job"

function Jobs() {

  const [dataLength, setDataLength] = useState(4)

  const [jobs, setJobs] = useState([])

  useEffect(()=> {
    fetch('data/jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])


  return (
    <div className="mt-28 mb-24">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-extrabold text-center pb-4">
        Featured Jobs
        </h1>
        <p className="text-[#757575] font-medium text-center w-7/12 pb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
          {
            jobs.slice(0, dataLength).map((job, index) => <Job key={index} job ={job}></Job>)
          }
      </div>
      <div className={`flex justify-center pt-10  ${ dataLength === jobs.length ? 'hidden' : ''}`} >
        <button onClick={() => setDataLength(jobs.length)} className="btn px-6 text-base font-bold text-white bg-gradient-to-r from-[#7e90fe] to-[#917bff]  text-center">See All Jobs</button>
      </div>
    </div>
  )
}

export default Jobs