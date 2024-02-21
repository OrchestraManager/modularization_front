import "./Signup.css";
import { useState, useEffect } from "react";
import Server from "../../Common/server/server.json";
import { useNavigate } from 'react-router-dom';

export function Signup() {
    
    const [userName, setUserName] = useState('이름을 적어주세요.');
    const [userId, setUserId] = useState('아이디를 입력하세요.');
    const [userPW, setUserPW] = useState('');
    const [userPWCheck, setUserPWCheck] = useState('');
    const [PWCheckStatus, setPWCheckStatus] = useState('');
    const [IDDoubleCheck, setIDDoubleCheck] = useState('중복체크를 해주세요.');
    const navigate = useNavigate();

    // Check the difference between password and password recheck.
    useEffect(() => {
        if (userPWCheck === '') {
            setPWCheckStatus('')
        }
        else if (userPW === userPWCheck) {
            setPWCheckStatus('비밀번호가 일치합니다.')
        }
        else {
            setPWCheckStatus('비밀번호가 일치하지 않습니다.');
        }
    }, [userPW, userPWCheck])

    useEffect(() => {
        setIDDoubleCheck('중복체크를 해주세요.');
    }, [userId])

    // Function to doublecheck ID. Send written ID to server and get a response.
    const doubleCheckId = () => {
        
        if(userId.includes(" ")) {
            setIDDoubleCheck('아이디에는 공백을 추가할 수 없습니다.')
        }
        else {

            fetch(Server.server + '/idDoubleCheck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId }),
            mode : 'cors'
            })
            .then(response => {
                if (!response.ok) {
                    console.log("Network Error at idDoubleCheck.");
                }
                return response.json();
            })
            .then(data => {
                if (data.check) {
                    setIDDoubleCheck('사용 가능한 아이디입니다.');
                } else {
                    setIDDoubleCheck('이미 사용 중인 아이디입니다.');
                }
            })
            .catch(error => {
                console.error('Network Error at idDoubleCheck.', error);
                setIDDoubleCheck('다시 눌러주세요.');
            });
        }
    }

    // Put user identity into database.
    const signupFinal = () => {

        if((userPW !== "") && (userPW === userPWCheck) && (IDDoubleCheck === "사용 가능한 아이디입니다.")){
            fetch(Server.server + '/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: userName, userId: userId, userPW: userPW }),
                mode : 'cors'
                })
                .then(response => {
                    if (!response.ok) {
                        console.log("Network Error at signup.");
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.check) {
                        navigate({pathname : "/"});
                    }
                })
                .catch(error => {
                    console.error('Network Error at signup.', error);
                    alert('네트워크 오류입니다. 다시 접속해주세요.');
                });
        }
        else if (IDDoubleCheck !== "사용 가능한 아이디입니다.") {
            alert("아이디 중복 체크를 해주세요.");
        }
        else if (userPW === "") {
            alert("비밀번호는 필수 입력 사항입니다.");
        }
        else if (userPW !== userPWCheck) {
            alert("비밀번호를 다시 확인해주세요.");
        }
        else {
            alert("문제가 발생했습니다. 창을 새로고침해주세요.");
        }
    }

    const updateUserName = (event) => {
        setUserName(event.target.value);
    }

    const updateUserId = (event) => {
        setUserId(event.target.value);
    }

    const updateUserPW = (event) => {
        setUserPW(event.target.value);
    }

    const updateUserPWCheck = (event) => {
        setUserPWCheck(event.target.value);
    }
    
    return (
        <div className = "Signup">
            <div className = "SignupBox">
                <div className = "text400">회원가입</div>

                <div className = "SignupBoxInputField">
                    <div className = "text600">이름</div>                    
                    <input className = "SignupBoxNameField" type = "text" value = {userName} onChange = {updateUserName}/>
                </div>

                <div className = "SignupBoxInputField">
                    <div className = "text600">아이디</div>
                    <input className = "SignupBoxIdField" type = "text" value = {userId} onChange = {updateUserId}/>
                </div>

                <div className = "IdDoubleCheckBox">
                    <div className = "IdDoubleCheckButton" onClick = {doubleCheckId}>
                        <div className = "text600">중복체크</div>
                    </div>
                    <div className = "IdDoubleCheckStatus">{IDDoubleCheck}</div>
                </div>

                <div className = "SignupBoxInputField">
                    <div className = "text600">비밀번호</div>                    
                    <input className = "SignupBoxPWField" type = "password" value = {userPW} onChange = {updateUserPW}/>
                </div>
                
                <div className = "SignupBoxInputField">
                    <div className = "text600">비밀번호 확인 </div>
                    <div className = "SignupBoxPWCheckFieldBox">
                        <input className = "SignupBoxPWCheckField" type = "password" value = {userPWCheck} onChange = {updateUserPWCheck}/>
                        <div className = "text700">{PWCheckStatus}</div>
                    </div>                     
                </div>

                <div className = "SignupButtonBox">
                    <div className = "SignupButton" onClick = {signupFinal}>
                    <div className = "text600">계정 생성하기</div>
                    </div>
                </div>

            </div>
        </div>
    )
}