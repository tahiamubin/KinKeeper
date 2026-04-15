import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import Homepage from '../components/HomePage/Homepage';
import Friends from '../components/friends/Friends';
import FriendsDetails from '../components/ui/FriendsDetails';
import Timeline from '../components/Timeline/Timeline';
import { createBrowserRouter } from 'react-router';
import Status from '../components/Status/Status';
import NotFound from '../components/Shared/NotFound';


export const router = createBrowserRouter([
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
    ],
    errorElement: <NotFound></NotFound>,
  },
]);
const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;