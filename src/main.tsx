// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
// import App from './routes/App.tsx'
// import ProjectDetails from './routes/ProjectDetails.tsx'
// import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '/:projectId', element: <ProjectDetailsWrapper /> }
//     ]
//   }
// ])

// function ProjectDetailsWrapper() {
//   const { projectId } = useParams<{ projectId?: string }>();
//   return projectId ? <ProjectDetails projectId={projectId} /> : null;
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import App from './routes/App';
import ProjectDetails from './routes/ProjectDetails';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:projectId" element={<ProjectDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

function ProjectDetailsWrapper() {
  const { projectId } = useParams<{ projectId?: string }>();
  return projectId ? <ProjectDetails projectId={projectId} /> : null;
}
