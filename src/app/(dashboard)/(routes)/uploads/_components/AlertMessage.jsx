import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMessage = ({message}) => {
  return (
    <div className='p-4 bg-red-500 mt-5 text-white rounded-md flex gap-5 items-start'>
        <AlertCircle/>
        {message}
    </div>
  )
}

export default AlertMessage