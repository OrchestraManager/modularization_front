import "./Main.css";
import { Room } from "./Room";
import { Navbar } from "../../Common/component/Navbar";

export function Main() {

    return(
        <div className="mainpage">
            <Navbar/>
            <Room/>
        </div>
    );
}
