import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom"

const Private_Routes = () => {
	const token = Cookies.get('authToken')
	if(!token){
		return <Navigate to='/Login'/>
	}
	return <Outlet/>
}

export default Private_Routes