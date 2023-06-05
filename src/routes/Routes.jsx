import { createBrowserRouter } from 'react-router-dom'
import { getRoom } from '../API/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import Main from '../layouts/Main'
import AddRoom from '../Pages/Dashboard/AddRoom'
import MyBookings from '../Pages/Dashboard/MyBookings'
import MyListings from '../Pages/Dashboard/MyListing'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import SignUp from '../Pages/SignUp/Signup'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({params})=>getRoom(params.id)
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  { 
    path:'/dashboard', 
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<MyBookings></MyBookings>
      },
      {
        path:'add-room',
        element:<AddRoom></AddRoom>
      },
      {
        path:'my-bookings',
        element:<MyBookings></MyBookings>
      },
      {
        path:'my-listings',
        element:<MyListings></MyListings>
      },
    ]
  }
])
