import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import AuthProvider from './AuthProvider';
import AllEquipment from './AllEquipment';
import AddEquipment from './AddEquipment';
import MyEquipment from './MyEquipment';
import Details from './Details';
import ErrorPage from './ErrorPage'
import Category from './Category';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-server-eta-one.vercel.app/products')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category",
        element: <Category></Category>,
        loader: () => fetch('https://assignment-server-eta-one.vercel.app/products')
      },
      {
        path: "/all equipment",
        element: <PrivateRoute><AllEquipment></AllEquipment></PrivateRoute>,
        loader: () => fetch('https://assignment-server-eta-one.vercel.app/products')
      },
      {
        path: "/add equipment",
        element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>,
      },
      {
        path: "/my equipment",
        element: <PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
        loader: () => fetch(`https://assignment-server-eta-one.vercel.app/product`)
      },
      {
        path: "/all equipment/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-server-eta-one.vercel.app/${params.id}`)
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
