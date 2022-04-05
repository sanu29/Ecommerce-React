import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";

export function PrivateRoute({children})
{
    const {isLogin} = useAuthContext()
        return isLogin?<Outlet/>:<Navigate replace to="/login"/>
}