import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import Ragister from "../../UserAccount/Ragister/Ragister";
import Login from "../../UserAccount/Login/Login";
import Instructors from "../../Pages/Instructors/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes/Classes";


const Route = createBrowserRouter([
     {
           path:'/',
           element:<Main></Main>,
           children:[
               {
                     path:'/',
                     element:<Home></Home>
               },
               {
                     path:'/ragister',
                     element:<Ragister></Ragister>
               },
               {
                     path:'/login',
                     element:<Login></Login>
               },
               {
                     path:'/instructors',
                     element:<Instructors></Instructors>
               },
               {
                     path:'/classes',
                     element:<Classes></Classes>
               }
           ]
     }
])

export default Route;