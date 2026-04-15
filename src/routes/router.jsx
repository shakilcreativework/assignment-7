import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home/Home';
import Timeline from '../pages/Timeline/Timeline';
import Stats from '../pages/Stats/Stats';
import FriendInfo from '../pages/FriendInfo/FriendInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/timeline',
            element: <Timeline />
        },
        {
            path: '/stats',
            element: <Stats />
        },
        {
            path: '/friendInfo/:id',
            element: <FriendInfo />
        },
    ]
  },
]);

export default router;