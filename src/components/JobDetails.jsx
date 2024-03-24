import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/utility";

import phone from '../../src/assets/icons/phone.png'
import email from '../../src/assets/icons/email.png'
import jobicon from '../../src/assets/icons/calendar.png'
import money from '../../src/assets/icons/money.png'
import location from '../../src/assets/icons/location2.png'

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)

  const handleApplyNotify = () => {
    
    saveJobApplication(idInt)
    toast('Applied Successfully')
  }

  

  const job = jobs.find((job) => job.id == idInt);

  const {
    job_responsibility,
    job_description,
    educational_requirements,
    contact_information,
    salary,
    job_title,
    experiences,
  } = job;

  return (
    <div className="pt-40 bg-[#f5f5f5] ">
      <h3 className="text-center font-extrabold text-3xl pb-28">Job Details</h3>
      <div className="grid grid-cols-6 gap-8 bg-white container lg:px-16 px-6 mx-auto">
        <div className="col-span-4  pt-24 ">
          <h4 className="pb-6">
            <span className="text-base font-extrabold">Job Description:</span>
            <span className="text-[#757575]"> {job_description}</span>
          </h4>
          <h4 className="pb-6">
            <span className="text-base font-extrabold">
              Job Responsibility:
            </span>
            <span className="text-[#757575]"> {job_responsibility}</span>
          </h4>
          <h4 className="pb-6">
            <span className="text-base font-extrabold ">
              Educational Requirements:
            </span>
            <h4 className="text-[#757575] pt-2 font-semibold">
              {educational_requirements}
            </h4>
          </h4>
          <h4 className="pb-6">
            <span className="text-base font-extrabold "> Experience:</span>
            <h4 className="text-[#757575] pt-2 font-semibold">{experiences}</h4>
          </h4>
        </div>
        <div className="col-span-2  mt-24 mb-28">
          <div className="bg-[#f4f2ff] rounded-lg p-7">
            <h3 className="pb-5 text-lg font-extrabold ">Job Details</h3>
            <hr className="border-[#cecae5] mb-6" />
            <div className="flex gap-1.5 items-center pb-2">
                <img className="w-5 h-5" src={money} alt="" />
                <h4 className="text-[#474747] font-bold text-base">Sallary : <span className="font-normal">{salary}(Per Month)</span></h4>
            </div>
            <div className="flex gap-1.5 items-center pb-7">
                <img className="w-5 h-5" src={jobicon} alt="" />
                <h4 className="text-[#474747] font-bold text-base">Job Title : <span className="font-normal">{job_title}</span></h4>
            </div>
            <h3 className="pb-5 text-lg font-extrabold">Contact Information</h3>
            <hr className="border-[#cecae5] mb-6" />
            
            <div className="flex gap-1.5 items-center pb-2">
                <img className="w-5 h-5" src={phone} alt="" />
                <h4 className="text-[#474747] font-bold text-base">Phone : <span className="font-normal">{contact_information.phone}</span></h4>
            </div>
            <div className="flex gap-1.5 items-center pb-2" >
                <img className="w-5 h-5" src={email} alt="" />
                <h4 className="text-[#474747] font-bold text-base">Email : <span className="font-normal">{contact_information.email}</span></h4>
            </div>
            <div className="flex gap-1.5 ">
                <img className="w-5 h-5" src={location} alt="" />
                <h4 className="text-[#474747] font-bold text-base">Address : <span className="font-normal">{contact_information.address}</span></h4>
            </div>

          </div>
          <button onClick={handleApplyNotify} className="mt-5 btn w-full text-lg font-extrabold bg-gradient-to-r from-[#7e90fe] to-[#917bff] text-white">Apply Now</button>
        </div>
      </div>
      <ToastContainer autoClose={1000} ></ToastContainer>
    </div>
  );
}

export default JobDetails;
