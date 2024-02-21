import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import Server from "../server/server.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {

    const [userId, setUserId] = useState("admin");
    const navigate = useNavigate();
    const token = localStorage.getItem("uid");

    fetch(Server.server + '/userid', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'usertoken': token
        },
        mode : 'cors'
        })
        .then(response => {
            if (!response.ok) {
                navigate({pathname: "/"});
                alert("사용자를 찾을 수 없습니다. 다시 로그인해주세요.");
            }
            return response.json();
        })
        .then(data => {
            setUserId(data.userId);
        })
        .catch(error => {
            console.error('Network Error at userid.', error);
            navigate({pathname: "/"});
            alert("사용자를 찾을 수 없습니다. 다시 로그인해주세요.");
        });

    return (
        <div className = "Navbar">
            <div className = "LeftMenu">
                <div className = "Logo"></div>
                <div className = "text600">
                    안녕하세요, {userId}님?
                </div>
            </div>
            <div className = "RightMenu">
                <div className = "text600">
                    방구석 콘서트
                </div>
                <div className = "text600">
                    상점
                </div>
                <BiMenu size = "35"/>
            </div>
        </div>
    )
}