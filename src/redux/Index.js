import { configureStore } from '@reduxjs/toolkit';
import users from "@/redux/features/users.slice"

export const store = configureStore({
  reducer: {
    users
  },
})