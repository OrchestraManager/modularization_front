import { useState, useRef } from "react";

/*
DragAndDrop

User can drag and drop the files in the box to upload them.
User can delete the files.
width : draganddrop box width (-1 : 100%)
height : draganddrop box height
format : string array of possible formats  e.g.) ['.docs', '.pptx']
setFile : useState hook that stores dropped file information

*/
export function DragAndDrop({ width, height, format, setFile }) {

    const MTOP = (height / 2) - 2;
    const MHEIGHT = height - 45;
    let DELETE_FLAG = 0;

    // Reset the format in appropriate string.
    let formatString = '';
    if (format && format.length > 0) {
        formatString = format.join(',');
    }

    // Click the box to select the file.
    const fileRef = useRef(null);
    const handleBoxClick = () => {
        if (DELETE_FLAG) {
            fileRef.current.disabled = false;
            DELETE_FLAG = 0;
        }
        else {
            fileRef.current.click();
        }
    }

    // Manipulate selected file.
    const [currFile, setCurrFile] = useState([]);

    const handleFile = (event) => {
        const placedFile = event.target.files;
        if (placedFile && Array.from(placedFile).length > 0) {
            const newFiles = Array.from(placedFile).filter(file => !currFile.find(curr => curr.name === file.name));
            setCurrFile(prevFiles => [...prevFiles, ...newFiles]);
            setFile(prevFiles => [...prevFiles, ...newFiles]);
        }
    };

    const dropFile = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files;
        if (droppedFile.length > 0) {
            const newFiles = Array.from(droppedFile).filter(file => !currFile.find(curr => curr.name == file.name));
            setCurrFile(prevFiles => [...prevFiles, ...newFiles]);
            setFile(prevFiles => [...prevFiles, ...newFiles]);
        }
    };

    const DeleteFile = (index) => {
        const newFiles = [...currFile.slice(0, index), ...currFile.slice(index + 1)];
        setCurrFile(newFiles);
        setFile(newFiles);
        fileRef.current.disabled = true;
        DELETE_FLAG = 1;
    };



    return (
        <>
            <div className="drag-and-drop"
                style={{
                    width: (width === -1) ? '100%' : width + 'px',
                    height: height + 'px',
                    border: '1px solid black',
                    padding: '10px',
                    marginTop: '20px',
                    marginBottom: '20px',
                    paddingTop: (currFile.length > 0) ? '10px' : MTOP.toString() + 'px'
                }}
                onClick={handleBoxClick}
                onDrop={dropFile}
                onDragOver={(event) => event.preventDefault()}
            >
                <div style={{ height: MHEIGHT.toString() + 'px', overflow: 'scroll' }}>
                    {currFile.length > 0 ? (
                        currFile.map((elem, index) => (
                            <div key={index}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <span key={index} className="text650">
                                    {index + 1}. {elem.name}
                                </span>
                                <span key={index} className="text650" onClick={() => DeleteFile(index)}>
                                    삭제
                                </span>
                            </div>
                        ))
                    ) : (
                        <span className="text650" style={{
                        }}>
                            이곳에 파일을 드래그하거나 여기를 클릭해주세요.<br />
                            파일 형식 :
                            <span className="text650-bold">
                                {' ' + formatString}
                            </span>
                        </span>
                    )}
                </div>
                <div>
                    {currFile.length > 0 ?
                        (<div style={{ marginTop: '5px' }}>
                            <span className="text650">
                                파일을 더 추가하려면 계속하여 파일을 드래그하거나 여기를 클릭해주세요. <br />
                                파일 형식 :
                                <span className="text650-bold">
                                    {' ' + formatString}
                                </span>
                            </span>
                        </div>) : (<div></div>)
                    }
                </div>
            </div >
            <input
                type="file"
                id="drag-and-drop-input"
                onChange={handleFile}
                ref={fileRef}
                accept={formatString}
                style={{ display: "none" }}
                multiple
            />
        </>
    )
}