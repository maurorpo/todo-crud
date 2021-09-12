import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import PageNotFound from '../Pages/404'
import Todo from '../Pages/Todo'
import SingUp from '../Pages/SingUp'

const Routes = [
  
  {
    path: '/profile',
    component: Dashboard,
    isPrivate: true
  },
  {
    path: '/todo',
    component: Todo,
    isPrivate: true
  },
  {
    path: '/singup',
    component: SingUp,
    isPrivate: false
  },
  {
    path: '/',
    component: Login,
    isPrivate: false
  },
  {
    path: '/*',
    component: PageNotFound,
    isPrivate: false
  },
]

export default Routes