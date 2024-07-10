"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'
import app from "../../../../firebaseConfig"
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import {doc, getFirestore, setDoc} from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'

const Uploads = () => {

  const [progress, setProgress] = useState()
  const {user} = useUser()
  console.log(user);

  const storage = getStorage(app);
  const db = getFirestore(app)

  const generateRandomString=()=>{
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
  
  const upLoadFile=(file)=>{
    const storageRef = ref(storage,'file-upload/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file?.type);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       setProgress(progress);
        progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file,downloadURL)
        });
      },)
  }

  const saveInfo = async(file,fileUrl)=>{
    const docId = Date.now().toString();
    await setDoc(doc(db,'uploadedFile',docId),{
      fileName:file.name,
      fileUrl:fileUrl,
      fileType:file.type,
      fileSize:file.size,
      userEmail:user.primaryEmailAddress.emailAddress,
      userName:user.fullName,
      password:"",
      shortURl:process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()
    })
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