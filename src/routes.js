import {Users} from './pages/Users.jsx'
import {UserDetails} from './pages/UserDetails.jsx'

const routes = [
    {
      path: "/",
      component: Users,
      label: "Users",
    },
    {
        path: "/user/",
      component: UserDetails,
      label: "UserDetails",
    }
  ];
  
  export default routes;
  