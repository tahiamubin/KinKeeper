import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './components/MainLayout/MainLayout';
import Homepage from './components/HomePage/Homepage';
import Timeline from './components/Timeline/Timeline';
import Status from './components/status/Status';
import FriendsDetails from './components/ui/FriendsDetails';
import Friends from './components/friends/Friends';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
       {
        index: true,
        element: <Homepage></Homepage>
       },
         {
        path: "/friends",
        element: <Friends></Friends>
       },
       {
        path: "/friends/:id",
        element: <FriendsDetails></FriendsDetails>
       },
       {
        path: "/timeline",
        element: <Timeline></Timeline>
       },
       {
        path: "/status",
        element: <Status></Status>
       },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
