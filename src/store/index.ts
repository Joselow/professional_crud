import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './users/slice'

// const MiddlewarePersistence = (store) => (next) => (action) => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// }

export const store = configureStore({
  reducer: {
    users: UserReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MiddlewarePersistence),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispacth = typeof store.dispatch