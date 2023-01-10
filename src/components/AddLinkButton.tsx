import React from 'react'

import { useAdmin } from '../context/AdminContext'
import { AdminActionType } from '../context/adminReducer'

const AddLink = () => {
  const { adminState, dispatch } = useAdmin()

  if (!adminState.loggedIn || adminState.addingLink) return <></>
  return (
    <div
      className='text-center text-black lg:hover:cursor-pointer lg:hover:bg-white'
      onClick={() =>
        dispatch({ type: AdminActionType.ADDING_LINK, payload: !adminState.addingLink })
      }
    >
      <svg
        className='mx-auto w-8 lg:w-16'
        viewBox='0 0 1024 1024'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M576.477 448.471l349.649.621c35.346.041 63.967 28.728 63.926 64.074s-28.728 63.967-64.074 63.926l-349.429-.621.194 349.647c.013 35.346-28.63 64.01-63.977 64.023s-64.01-28.63-64.023-63.977l-.195-349.921-349.622-.621C63.58 575.581 34.959 546.894 35 511.548s28.728-63.967 64.074-63.926l349.402.621-.194-349.361c-.013-35.346 28.63-64.01 63.977-64.023s64.01 28.63 64.023 63.977l.194 349.635z' />
      </svg>
      Add Link
    </div>
  )
}

export default AddLink
