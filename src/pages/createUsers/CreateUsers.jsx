import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '@/redux/features/users.slice'

const initialInt = {
    id: "",
    fName: "",
    lName: "",
    profession: "",
    age: "",
    gender: "",
    bio: ""
}

const CreateUsers = () => {

    const [int, setInt] = useState(initialInt)

    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(addUsers(
            {...int, id: crypto.randomUUID()}
        ))
        setInt(initialInt)
    }

  return (
    <>
        <section className='bg-slate-50 w-full min-h-screen'>
            <div className="container max-w-7xl mx-auto px-4 ">
                <div className='py-20 max-w-3xl mx-auto'>
                    <form onSubmit={handleForm} action="" className='flex flex-col gap-12'>
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
                            <button className='px-8 py-3 bg-black text-white font-medium cursor-pointer block mx-auto rounded hover:bg-black/70 active:bg-black '>Create new user</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default memo(CreateUsers)