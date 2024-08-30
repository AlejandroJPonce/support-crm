
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'


export const routes = [
  {
    path: '/',
    element: <SignIn /> 
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }
]