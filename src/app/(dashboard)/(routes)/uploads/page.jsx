"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'
import app from "../../../../firebaseConfig"
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'

const Uploads = () => {

  const [progress, setProgress] = useState()

  const storage = getStorage(app);
  
  const upLoadFile=(file)=>{
    const storageRef = ref(storage,'file-upload/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file?.type);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       setProgress(progress);
        progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      },)
  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className='text-primary'>Uploading</strong> Files and
       <strong className='text-primary'>Share</strong> it</h2>
      <UploadForm 
      UploadBtnClick={(file)=>upLoadFile(file)}
      progress={progress}
        />
    </div>
  )
}

export default Uploads