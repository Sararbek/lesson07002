import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/layout/Layout'
import SuspenseContainer from '@/utils/SuspenseContainer'
const CreateUsers = lazy(() => import("@/pages/createUsers/CreateUsers"))
const Users = lazy(() => import("@/pages/users/Users"))

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
                <Route path='/' element={<SuspenseContainer><Users/></SuspenseContainer>}/>
                <Route path='/createusers' element={<SuspenseContainer><CreateUsers/></SuspenseContainer>}/>
            </Route>
        </Routes>
    </>
  )
}

export default Router