import { useNavigate } from "react-router-dom";
import  Server  from "./server.json";
import { useState, useEffect } from "react";

export function GetUserId() {
    const [userId, setUserId] = useState("admin");

    const navigate = useNavigate();
    const token = localStorage.getItem("uid");

    // Get user id.
    useEffect(() => {
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
    }, [token, navigate]);

    return userId;
}