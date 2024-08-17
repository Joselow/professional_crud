import { User } from "@/interfaces/User"

const LOCAL_USERS_NAME = 'LOCAL_STORAGE_USERS_NAME'

export const getUsers = (): User[] => {
  const data = localStorage.getItem(LOCAL_USERS_NAME)  
  return data? JSON.parse(data) : []
} 

export const updateUsers = (data: User[]) => {
  localStorage.setItem(LOCAL_USERS_NAME,JSON.stringify(data))
}
