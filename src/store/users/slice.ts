import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/interfaces/User";

const initialState: User[]= []

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { 
    addUser: (state, action: PayloadAction<User>) => {   
      console.log('llegó');
      
      return [ ...state, { ...action.payload } ]
    },
    deleteUserById: (state, action: PayloadAction<string>) => {            
      return state.filter(({id}) => id !== action.payload)
    },
    assignData(_state, action: PayloadAction<User[]>){      
      return action.payload
    }
  }, 
})

export const sliceName = usersSlice.name; 
export default usersSlice.reducer;
export const { deleteUserById, assignData, addUser } = usersSlice.actions