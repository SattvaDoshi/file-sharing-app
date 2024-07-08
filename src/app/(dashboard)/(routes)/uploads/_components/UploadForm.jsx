"use client"
import React, { useState } from 'react'
import AlertMessage from './AlertMessage'
import FilePreview from './FilePreview'
import ProgressBar from './ProgressBar'

const UploadForm = ({UploadBtnClick,progress}) => {
    const [files, setFiles] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const onfileSelect = (file) => {
        if(file && file.size>2000000){
            console.log("Size is greater");
            setErrorMsg("File size is greater than 2MB")
            return;
        }
        setFiles(file)
        setErrorMsg(null)
    }

    return (
        <div className='text-center'>
            <div className="flex items-center justify-center w-full">
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-12 h-12 mb-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 md:text-xl text-lg "><span className="font-bold text-blue-500">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-blue-500 ">SVG, PNG, JPG or GIF (MAX-SIZE : 2 MB)</p>
                    </div>
                    <input id="dropzone-file" type="file"
                        className="hidden"
                        onChange={(event) => onfileSelect(event.target.files[0])}
                    />
                </label>
            </div>
            {errorMsg ? <AlertMessage message={errorMsg} /> : null}
            {files ? <FilePreview file={files} removeFile={()=>setFiles(null)} /> : null}

            {
                progress ? <ProgressBar progress={progress} /> : 
            <button
                disabled={!files}
                onClick={()=>UploadBtnClick(files)}
                className='p-2 bg-primary rounded-full text-white w-[30%] mt-5 cursor-pointer
                 disabled:bg-gray-500 hover:bg-blue-700'>
                    Upload
            </button>
            }
        </div>
    )
}

export default UploadForm