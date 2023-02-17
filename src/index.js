import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Jobs from './components/Jobs/Jobs';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/jobs",
                element: <Jobs />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// var fontA = new FontFaceObserver('Fredoka', {
//     weight: 400
// });
// var fontB = new FontFaceObserver('Fredoka', {
//     weight: 700
// });
// var fontC = new FontFaceObserver('WidescreenVF');

// Promise.all([fontA.load(null, 15000), fontB.load(null, 15000)], fontC.load(null, 15000)).then(function () {
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
