import "./Main.css";
import { Room } from "./Room";
import { Practice } from "./Practice";
import { Navbar } from "../../components/form/Navbar";

export function Main() {


    return (
        <div className="mainpage">
            <Navbar />
            <div className="content">
                <div className="left-aside">
                </div>
                <div className="content-main">
                </div>
                <div className="right-aside">

                </div>
            </div>
        </div>
    );
}
