import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Root from './components/Root'
import Statistics from './components/Statistics'
import AppliedJobs from './AppliedJobs'
import Blogs from './components/Blogs'
import JobDetails from './components/JobDetails'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/appliedjobs',
          element: <AppliedJobs></AppliedJobs>,
          loader: () => fetch("../data/jobs.json")
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/job/:id',
          element: <JobDetails></JobDetails>,
          loader: ()=> fetch('../data/jobs.json')
        }
      ]
      
      
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
