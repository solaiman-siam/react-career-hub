import { Link } from "react-router-dom";

function AppliedJob({ job }) {
  const {
    id,
    job_title,
    logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
   <div className="container lg:px-24 px-6 mx-auto">
     <div className="p-10  rounded-xl border-2 border-[#f2f2f2] grid grid-cols-3">
      <div className="pb-6 bg-[#f8f8f8] p-10 rounded-xl w-fit flex justify-center items-center">
        {" "}
        <img src={logo} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl font-extrabold text-[#474747]">{job_title}</h3>
        <h4 className="pt-2 text-lg font-semibold text-[#757575]">
          {company_name}
        </h4>
        <div className="flex gap-4 py-4">
          <h4 className="p-2 px-4 py-2 border bg-gradient-to-r from-[#7e90fe] to-[#917bff] text-transparent bg-clip-text border-blue-400 rounded-md font-bold">
            {remote_or_onsite}
          </h4>
          <h4 className="p-2 px-4 py-2 border bg-gradient-to-r from-[#7e90fe] to-[#917bff] text-transparent bg-clip-text border-blue-400 rounded-md font-bold">
            {job_type}
          </h4>
        </div>
        <div className="flex gap-6  font-semibold">
          <div className="flex gap-2 text-[#757575]">
            <img src="../../src/assets/icons/Location.png" alt="" />
            <h4> {location}</h4>
          </div>
          <div className="flex gap-2 text-[#757575]">
            <img src="../../src/assets/icons/money.png" alt="" />
            <h4> {salary}</h4>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Link to={`/job/${id}`}>
          <button className="bg-gradient-to-r btn-md btn mt-6 from-[#7e90fe] to-[#917bff] px-6 rounded-lg text-white font-extrabold text-base">
            View Details
          </button>
        </Link>
      </div>
    </div>
   </div>
  );
}

export default AppliedJob;
