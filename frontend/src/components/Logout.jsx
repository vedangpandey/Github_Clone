import React from 'react'
import { MdLogout } from 'react-icons/md'

function Logout() {
  return (
    <div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto'>
        <MdLogout size={22} />
    </div>
  )
}

export default Logout