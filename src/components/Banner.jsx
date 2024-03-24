import bannerImg from '../../src/assets/images/user.png'
function Banner() {
  return (
    <div className="mb-24  grid grid-cols-2 gap-6 items-center justify-between pt-32">
      <div>
        <h1 className="text-7xl pb-4 font-extrabold leading-[90px]">One Step Closer To Your <span className="bg-gradient-to-r from-[#7e90fe] to-[#917bff] text-transparent bg-clip-text">Dream Job</span></h1>
        <p className="pb-8 w-11/12 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="bg-gradient-to-r text-lg btn from-[#7e90fe] to-[#917bff] px-6  rounded-lg text-white font-extrabold">Get Started</button>
      </div>
      <div className="w-fit">
          <img className="w-fit" src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner