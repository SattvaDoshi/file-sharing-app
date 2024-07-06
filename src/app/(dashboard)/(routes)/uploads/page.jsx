import React from 'react'
import UploadForm from './_components/UploadForm'

const Uploads = () => {
  const storage = getStoreage(app)
  const upLoadFile=(file)=>{

  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className='text-primary'>Uploading</strong> Files and
       <strong className='text-primary'>Share</strong> it</h2>
      <UploadForm UploadBtnClick={(file)=>upLoadFile(file)}/>
    </div>
  )
}

export default Uploads