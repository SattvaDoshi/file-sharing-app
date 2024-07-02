import { FileText, X } from 'lucide-react'
import React from 'react'

const FilePreview = ({ file,removeFile }) => {
    return (
            <div className='flex text-center items-center p-2 gap-3 mt-5'>
                <div className='flex items-center  gap-3'>
                    <FileText className='text-primary text-3xl' />
                    <div className='text-left'>
                        <h2>{file.name}</h2>
                        <h2 className='text-[12px] text-gray-400'>{file?.type} / {(file?.size / 1024 / 1024).toFixed(2)} MB</h2>

                    </div>
                </div>
                <X onClick={()=>removeFile()}
                className='cursor-pointer'
                />
            </div>
    )
}

export default FilePreview