import "./Login.css";
import Server from "../../Common/server/server.json";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Login() {
    
    const [userId, setUserId] = useState('아이디를 입력하세요.');
    const [userPW, setUserPW] = useState('');
    const navigate = useNavigate();

    const updateUserId = (event) => {
        setUserId(event.target.value);
    }

    const updateUserPW = (event) => {
        setUserPW(event.target.value);
    }

    const loginFinal = () => {
        fetch(Server.server + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId, userPW: userPW }),
            mode : 'cors'
            })
            .then(response => {
                if (!response.ok) {
                    console.log("Network Error at login.");
                }
                return response.json();
            })
            .then(data => {
                switch (data.result) {
                    case "success":
                        if(data.token) {
                            localStorage.setItem("uid", data.token); // Store token at local storage.
                            console.log(localStorage.getItem("uid"));
                            navigate({pathname: "/main"});
                        }
                        break;
                    case "missingId":
                        alert("해당 아이디를 찾을 수 없습니다.");
                        break;
                    case "missingPW":
                        alert("비밀번호가 일치하지 않습니다.");
                        break;
                    default:
                        alert("회원가입을 새로 해주세요.");
                        break;
                }
            })
            .catch(error => {
                console.error('Network Error at login.', error);
                alert('네트워크 오류입니다. 다시 접속해주세요.');
            });
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          if(userId === "") {
            alert("아이디를 입력해주세요.")
          }
          else {
            loginFinal();
          }
        }
    };

    const MoveToSignup = () => {
        navigate({pathname: "/signup"});
    }
    
    return (
        <div className = "Login">
            <div className = "LoginBox">
                <div className = "text400">로그인</div>
                <div className = "LoginBoxInputField">
                    <div className = "text600">아이디</div>
                    <input className = "LoginBoxIdField" type = "text" value = {userId} onChange = {updateUserId}/>
                </div>
                <div className = "LoginBoxInputField">
                    <div className = "text600">비밀번호</div>                    
                    <input className = "LoginBoxPWField" type = "password" value = {userPW} onChange = {updateUserPW} onKeyDown={handleKeyDown}/>
                </div>
                
                <div className = "LoginExceptionBox">
                    <div className = "LoginExceptionSignup" onClick = {() => MoveToSignup()}>
                        <div className = "text600">회원가입</div>
                    </div>
                    <div className = "LoginExceptionLost">
                        <div className = "text600">비밀번호 찾기</div>
                    </div>
                </div>

                <div className = "LoginButtonBox">
                    <div className = "LoginButton" onClick = {loginFinal}>
                    <div className = "text600">로그인하기</div>
                    </div>
                </div>

            </div>
        </div>
    )
}