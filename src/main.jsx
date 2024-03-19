import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Contact from './Contact.jsx';

import About from './About.jsx';
import Home from './Home.jsx';
import Wordpress from './Wordpress.jsx';
import FullStact from './FullStact.jsx';
import Users from './Users.jsx';
import UserDetails from './UserDetails.jsx';
import Posts from './Posts.jsx';
import PostDetails from './PostDetails.jsx';
import NotFountPage from './NotFountPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <NotFountPage />,
    children: [
      {
        path: "/conatct",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: "/user/:userID",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element:<UserDetails></UserDetails>
      },
      {
       path:"/posts",
       loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
       element:<Posts></Posts>
      },
      {
        path:"/post/:postID",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element:<PostDetails></PostDetails>
      }

    ],
  },
  {
    path: "/about",
    element: <div>hear is a about Rout</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
