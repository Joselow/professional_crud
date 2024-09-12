import { configureStore } from "@reduxjs/toolkit";
import UserReducer, { sliceName } from './users/slice'
import { updateUsers } from "@/helpers/localStore";
import { User } from "@/interfaces/User";

const MiddlewarePersistence = (store) => (next) => (action) => {
  // console.log(store.getState()); // recuperamos el estado antes de que se actualize
  next(action); // le decimos que continue
  if (action.type.startsWith(sliceName)) {
    const users = store.getState() as User[]
    updateUsers(users)
  }
  console.log(action); 
}

export const store = configureStore({
  reducer: {
    users: UserReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MiddlewarePersistence),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispacth = typeof store.dispatch