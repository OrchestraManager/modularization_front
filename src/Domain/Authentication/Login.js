import "./Login.css";
import { useState } from "react";

export function Login() {
    
    const [userId, setUserId] = useState('아이디를 입력하세요.');
    const [userPW, setUserPW] = useState('');

    const updateUserId = (event) => {
        setUserId(event.target.value);
    }

    const updateUserPW = (event) => {
        setUserPW(event.target.value);
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
                    <input className = "LoginBoxPWField" type = "password" value = {userPW} onChange = {updateUserPW}/>
                </div>
                
                <div className = "LoginExceptionBox">
                    <div className = "LoginExceptionSignup">
                        <div className = "text600">회원가입</div>
                    </div>
                    <div className = "LoginExceptionLost">
                        <div className = "text600">비밀번호 찾기</div>
                    </div>
                </div>

                <div className = "LoginButtonBox">
                    <div className = "LoginButton">
                    <div className = "text600">로그인하기</div>
                    </div>
                </div>

            </div>
        </div>
    )
}