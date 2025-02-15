import { updateUser } from '@/redux/features/users.slice'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const initialInt = {
    id: "",
    fName: "",
    lName: "",
    profession: "",
    age: "",
    gender: "",
    bio: ""
}

const ModalForm = ({user, setModal}) => {

    const [int, setInt] = useState(initialInt)

    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(updateUser(int))
        setInt(initialInt)
        setModal(false)
    }
    
    const handleModal = () => {
        setModal(false)
    }

    useEffect(() => {
        setInt(prev => ({...prev, ...user}))
    }, [user])

  return (
    <div onClick={handleModal} className='w-full h-screen fixed z-10 top-0 left-0 bg-[#0006] flex items-center justify-center '>
        <div onClick={e => e.stopPropagation()} className='p-10 max-w-3xl bg-white'>
            <form onSubmit={handleForm} action="#" className='flex flex-col gap-12'>
                <div className='grid grid-cols-2 gap-6 '>
                    <div className='space-y-2'>
                        <label htmlFor="" className='text-xs tracking-wider font-bold uppercase' >Firstname</label>
                        <input required value={int.fName} onChange={e => setInt(prev => ({...prev, fName: e.target.value}))} type="text" className=' outline-none border-b w-full '/>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="" className='text-xs tracking-wider font-bold uppercase' >lastname</label>
                        <input required value={int.lName} onChange={e => setInt(prev => ({...prev, lName: e.target.value}))} type="text" className=' outline-none border-b w-full '/>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-6 '>
                    <div className='space-y-2'>
                        <label htmlFor="" className='text-xs tracking-wider font-bold uppercase' >profession</label>
                        <input required value={int.profession} onChange={e => setInt(prev => ({...prev, profession: e.target.value}))} type="text" className=' outline-none border-b w-full '/>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="" className='text-xs tracking-wider font-bold uppercase' >age</label>
                        <input required value={int.age} onChange={e => setInt(prev => ({...prev, age: e.target.value}))} type="number" className=' outline-none border-b w-full '/>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="" className='block text-xs tracking-wider font-bold uppercase' >gender</label>
                        <select required name="" id="" value={int.gender}  onChange={e => setInt(prev => ({...prev, gender: e.target.value}))} className='outline-none w-full border-b ' >
                            <option value={""} >Not Given</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                        </select>
                    </div>
                </div>
                <div className='space-y-2'>
                    <label htmlFor="" className='block text-xs tracking-wider font-bold uppercase' >bio</label>
                    <textarea required name="" id="" value={int.bio} onChange={e => setInt(prev => ({...prev, bio: e.target.value}))} 
                    className=' w-full h-40 resize-none border rounded-md p-3 outline-none '></textarea>
                </div>
                <div>
                    <button className='px-8 py-3 bg-black text-white font-medium cursor-pointer block mx-auto rounded hover:bg-black/70 active:bg-black '>Save all the changes</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default memo(ModalForm)