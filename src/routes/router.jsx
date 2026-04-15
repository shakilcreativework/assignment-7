import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home/Home';
import Timeline from '../pages/Timeline/Timeline';
import Stats from '../pages/Stats/Stats';

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
    ]
  },
]);

export default router;