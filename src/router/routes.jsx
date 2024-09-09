
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Conversations from '../views/Conversations'

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
    element: <Conversations />
  }
]