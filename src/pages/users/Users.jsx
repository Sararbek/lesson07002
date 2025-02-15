import ModalForm from '@/components/modalForm/ModalForm'
import { deleteUsers, updateUser } from '@/redux/features/users.slice'
import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

const Users = () => {

  const users = useSelector((state) => state.users.value)
  const [modal, setModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const dispatch = useDispatch()

  const handleDelete = (user) => {
    dispatch(deleteUsers(user))
  }
  
  const handleEdit = (user) => {
    setModal(true)
    setSelectedUser(user)
  } 
  return (
    <>
    {
      modal && <ModalForm user={selectedUser} setModal={setModal}/>
    }
      <section className='py-20'>
        <div className='container max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-4 gap-6'>
            {
              users?.map(user => (
                <div key={user.id} className=' bg-slate-200 p-4 px-7 flex flex-col '>
                    <div className='flex justify-center py-6'>
                        <div className='w-20 h-20 rounded-full cursor-pointer overflow-hidden bg-white '>
                            <img src={user.gender === "Male" ? "https://cdn-icons-png.freepik.com/512/18/18148.png" : "https://cdn.vectorstock.com/i/1000v/26/53/user-icon-woman-profile-human-avatar-vector-10552653.jpg"} alt=""
                            className=' object-contain ' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-4 flex-1'>
                        <div className='text-center'>
                          <h3 className='text-lg font-bold '>{user.fName} {user.lName}</h3>
                          <p className=' font-medium text-sm capitalize '>{user.profession}</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-4xl font-semibold'>{user.age}</h2>
                        </div>
                        <div className='py-4 border-t border-slate-500 block w-full flex-1 '>
                          <p className='font-semibold line-clamp-2 ' title={user.bio}>{user.bio}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => handleDelete(user)} className='py-2 px-5 rounded cursor-pointer text-white font-semibold bg-red-500 '>Delete</button>
                            <button onClick={() => handleEdit(user)} className='py-2 px-5 rounded cursor-pointer text-white font-semibold bg-green-500 '>Edit</button>
                        </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Users)