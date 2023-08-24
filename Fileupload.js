import React, { useRef, useState } from 'react'

const Fileupload = () => {
    const fileInputRef = useRef(null);
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setSelectedFileName(selectedFile.name);
        }
    };
  return (
    <div className='choose-file'>
        <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
        />
        <button className="choose-button" onClick={handleChooseFile}>
            Choose File
        </button>
        {selectedFileName && <p>{selectedFileName}</p>}
    </div>
  )
}

export default Fileupload