import { useState } from "react";

export function Textarea({ height, width, initText, setText }) {

    const [currText, setCurrText] = useState(initText);


    const handleTextChange = (event) => {
        const value = event.target.value;
        setCurrText(value);
        setText(value);
    };

    return (
        <textarea
            value={currText}
            onChange={handleTextChange}
            style={{
                height: height + 'px',
                width: (width == -1) ? '100%' : width + 'px',
                padding: '10px',
                marginTop: '20px',
                marginBottom: '20px',
                fontFamily: 'pretendard',
                fontSize: '1.0vw',
                resize: 'none'
            }}
        />
    )
}