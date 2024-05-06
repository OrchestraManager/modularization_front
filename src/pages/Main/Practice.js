import "./Practice.css";
import { GetUserId } from "../../utils/util";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

export function Practice() {

    const userId = GetUserId();
    const [userHobby, setUserHobby] = useState("디비자기")

    return (
        <div className="practice-container">
            <div className="selected-hobby">
                <div className="text600">
                    {userId}님의 취미,
                </div>
                <div className="text500">
                    "{userHobby}"
                </div>
                <div className="text600">
                    연습하기
                </div>
                <div className="choose-hobby">
                    <div className="text650">다른 취미로 바꾸기</div>
                    <BsArrowRightShort size="30" />
                </div>
            </div>
        </div>
    )
}