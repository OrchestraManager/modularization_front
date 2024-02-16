import "./Signup.css";
import { useState, useEffect } from "react";

export function Signup() {
    
    const [userName, setUserName] = useState('이름을 적어주세요.');
    const [userId, setUserId] = useState('아이디를 입력하세요.');
    const [userPW, setUserPW] = useState('');
    const [userPWCheck, setUserPWCheck] = useState('');
    const [PWCheckStatus, setPWCheckStatus] = useState('');
    const [IDDoubleCheck, setIDDoubleCheck] = useState('중복체크를 해주세요.');

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

    // Function to doublecheck ID. Send written ID to server and get a response.
    const doubleCheckId = () => {
        if(userId.includes(" ")) {
            setIDDoubleCheck('아이디에는 공백을 추가할 수 없습니다.')
        }
        else {
            setIDDoubleCheck('사용 가능한 아이디입니다.');
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
                    <div className = "SignupButton">
                    <div className = "text600">로그인하기</div>
                    </div>
                </div>

            </div>
        </div>
    )
}