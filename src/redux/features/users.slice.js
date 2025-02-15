import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem("users")) || [],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, {payload}) => {
        state.value.push(payload)
        localStorage.setItem("users", JSON.stringify(state.value))
    },
    deleteUsers: (state, {payload}) => {
        state.value = state.value.filter(user => user.id != payload.id)
        localStorage.setItem("users", JSON.stringify(state.value))
    },
    updateUser: (state, {payload}) => {
        state.value = state.value.map(user => user.id === payload.id ? payload : user)
        localStorage.setItem("users", JSON.stringify(state.value))
    }
  },
})

export const { addUsers, deleteUsers, updateUser } = userSlice.actions

export default userSlice.reducer