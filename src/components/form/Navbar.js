import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { GetUserId } from "../../utils/util";

export function Navbar() {

    const [dropState, setDropState] = useState(false);
    const userId = GetUserId();

    const dropMenu = () => {
        setDropState(prevState => !prevState);
    }

    return (
        <div className="Navbar">
            <div className="LeftMenu">
                <div className="Logo"></div>
                <div className="text600">
                    안녕하세요, {userId}님?
                </div>
            </div>
            <div className="RightMenu">
                <div className="text600">
                    방구석 콘서트
                </div>
                <div className="text600">
                    상점
                </div>
                {dropState && <DropDownMenu />}
                <BiMenu size="35" onClick={dropMenu} />
            </div>
        </div>
    )
}


const DropDownMenu = () => {
    return (
        <ul className="dropdown-menu">
            <div className="text600">마이페이지</div>
            <div className="text600">로그아웃</div>
            <div className="text600">회원탈퇴</div>
        </ul>
    )
}