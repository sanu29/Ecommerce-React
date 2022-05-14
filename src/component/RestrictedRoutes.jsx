import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";

export function RestrictedRoutes({children})
{
    const {isLogin} = useAuthContext()
        return isLogin?<Navigate replace to="/"/>:<Outlet/>
}