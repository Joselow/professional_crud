import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/interfaces/User";

const defaultUsers = [ 
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    github: "johndoe123",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    github: "janesmith456",
  },
  {
    id: "3",
    name: "Carlos Garcia",
    email: "carlosgarcia@example.com",
    github: "carlosg789",
  },
  {
    id: "4",
    name: "Maria Rodriguez",
    email: "mariarodriguez@example.com",
    github: "mariar",
  },
  {
    id: "5",
    name: "Luis Fernandez",
    email: "luisfernandez@example.com",
    github: "lfernandez99",
  }
]

const initialState: User[]= []

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { 
    deleteUserById: (state, action: PayloadAction<string>) => {            
      return state.filter(({id}) => id !== action.payload)
    },
    assignData(_state, action: PayloadAction<User[]>){
      return action.payload.length 
            ? action.payload
            : defaultUsers
    }
  }, 
})

export default usersSlice.reducer;
export const { deleteUserById, assignData } = usersSlice.actions
