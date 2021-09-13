import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import PageNotFound from '../Pages/404'
import Todo from '../Pages/Todo'
import SingUp from '../Pages/SingUp'
import NewTask from '../Pages/NewTask'

const Routes = [
  
  {
    path: '/profile',
    component: Dashboard,
    name: 'Profile',
    isPrivate: true
  },
  {
    path: '/todo',
    component: Todo,
    name: 'Todo',
    isPrivate: true
  },
  {
    path: '/singup',
    component: SingUp,
    name: 'Sing Up',
    isPrivate: false
  },
  {
    path: '/new-task',
    component: NewTask,
    name: 'New task',
    isPrivate: false
  },
  {
    path: '/',
    component: Login,
    name: 'Login',
    isPrivate: false
  },
  {
    path: '/*',
    component: PageNotFound,
    name: '404',
    isPrivate: false
  },
]

export default Routes