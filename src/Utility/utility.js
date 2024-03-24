const getJobApplication = () => {
    const getAppliedJobs = localStorage.getItem('job-application');
    if(getAppliedJobs) {
        return JSON.parse(getAppliedJobs)
    }else{
        return []
    }
}

const saveJobApplication = (id) => {
        const getAppliedJobs = getJobApplication();
        const exist = getAppliedJobs.find(jobId => jobId === id);
        if(!exist){
            getAppliedJobs.push(id)
            localStorage.setItem('job-application', JSON.stringify(getAppliedJobs))
        }
}

export {saveJobApplication, getJobApplication} 

// const saveToLocalStorage = (data) => {
//     const getSavedData = JSON.parse(localStorage.getItem('applied-jobs' || []));
//     const exist = getSavedData.find(item => item.id === data.id)
//     if(!exist){
//         getSavedData.push(data)
//         localStorage.setItem('applied-jobs', JSON.stringify(getSavedData))
//     }
// }

// export {saveToLocalStorage}