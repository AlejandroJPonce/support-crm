
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Chats from '../views/Chats'


export const routes = [
  {
    path: '/',
    element: <SignIn /> 
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/chats',
    element: <Chats />
  }
]