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
        loader: () => fetch('http://localhost:4000/products')
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
        loader: () => fetch('http://localhost:4000/products')
      },
      {
        path: "/all equipment",
        element: <PrivateRoute><AllEquipment></AllEquipment></PrivateRoute>,
        loader: () => fetch('http://localhost:4000/products')
      },
      {
        path: "/add equipment",
        element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>,
      },
      {
        path: "/my equipment",
        element: <PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
        loader: () => fetch(`http://localhost:4000/product`)
      },
      {
        path: "/all equipment/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/products/${params.id}`)
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
