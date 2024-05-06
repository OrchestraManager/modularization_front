import { Navigate } from "react-router-dom";
import { checkLogin } from "../../utils/authentication";

export function AuthRoute({ component: Component, ...rest }) {

    return checkLogin() ? <Component /> : <Navigate to="/" />
}