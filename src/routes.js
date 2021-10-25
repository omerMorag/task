import {Users} from './pages/Users.jsx'
import {UserDetails} from './pages/UserDetails.jsx'

const routes = [
    {
      path: "/task",
      component: Users,
      label: "Users",
    },
    {
        path: "/task/user/:username",
      component: UserDetails,
      label: "UserDetails",
    }
  ];
  
  export default routes;
  