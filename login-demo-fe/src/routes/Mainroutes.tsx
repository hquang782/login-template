import { Navigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { Home } from '../components/Home'
import { getCurrentUser } from '../services/auth.service'
import { User } from '../components/User'

const LoginRoute = {
    path: '/login',
    element: <LoginForm />
}

const Mainroutes = () => [
    {
        path: '/',
        element: getCurrentUser() ? <Home /> : <Navigate to='/login' />,
        children:[
            {
                path:'/user',
                element:<User/>
            }
        ]
    },
    LoginRoute
]

// function Router(){
//     console.log(localStorage.getItem('user'));

//     if(access){
//         return  Mainroutes
//     }
//     return LoginRoute
// }
export default Mainroutes


