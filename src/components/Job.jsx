import { Link } from "react-router-dom";

function Job({ job }) {
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
    <div className="p-10 bg-[#f8f8f8] rounded-md border">
      <div className="pb-6">
        {" "}
        <img src={logo} alt="" />
      </div>
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
      <Link to={`/job/${id}`}>
        <button className="bg-gradient-to-r btn-md btn mt-6 from-[#7e90fe] to-[#917bff] px-6 rounded-lg text-white font-extrabold text-base">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default Job;
