import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Services from "./view/Services";
import Accueil from "./Accueil";
import Reserver from "./view/Reserve";
import SelectOption from "./view/SelectOption";
import SpicialService from "./view/spicialService";
import TextEditor from "./component/TextEditor";
import Login from "./component/Login";
import Dashbord from "./view/Dashbord";
import CreateCategory from "./component/Dashbord/createCategory";
import GetAllCategories from "./component/Dashbord/getAllCategories";
import RequestServices from "./component/Dashbord/RequestServices";
import GetRequest from "./component/Dashbord/GetRequest";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Accueil/>
        },
        {
            path:'/dashbord',
            element: <Dashbord/>,
            children:[
                {
                    path:'/dashbord',
                    element: <CreateCategory/>

                },
                {
                    path:'/dashbord/categories',
                    element: <GetAllCategories/>

                },
                {
                    path:'/dashbord/requests',
                    element:<RequestServices/>
                },
                {
                    path: '/dashbord/request',
                    element: <GetRequest/>
                }
            ]
           
        },
        {
            path: '/',
            element: <App />,
            children:[
                {
                    path: '/services',
                    element: <Services/>,
                    
                },
                {
                    path: '/login',
                    element: <Login/>
                }
            ],
           
        },
        {
           path: '/reserve',
           element: <Reserver/>
        },
        {
            path: '/selectoption',
            element: <SelectOption/>
         },
         {
            path: "/ter",
            element: <SpicialService/>
         },
         {
            path:'fer',
            element: <TextEditor/>
         }
    ]
)

export default router