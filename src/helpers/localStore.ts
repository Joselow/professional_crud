import { User } from "@/interfaces/User"

const LOCAL_USERS_NAME = 'LOCAL_STORAGE_USERS_NAME'
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
export const getUsers = (): User[] => {
  const data = localStorage.getItem(LOCAL_USERS_NAME)    
  if (!data) {
    return defaultUsers
  }
  const dataValue = JSON.parse(data)  
  if (dataValue && dataValue.users?.length) {    
    return dataValue.users
  } else {
    return defaultUsers
  }
} 

export const updateUsers = (data: User[]) => {
  localStorage.setItem(LOCAL_USERS_NAME, JSON.stringify(data))
}
