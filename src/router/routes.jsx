
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import SupportChat from '../views/SupportChat'


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
    element: <SupportChat />
  }
]