import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispacth, RootState } from "@/store";
import { deleteUserById, assignData, addUser } from "@/store/users/slice";

import { getUsers } from "@/helpers/localStore";
import { User } from "@/interfaces/User";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispacth: () => AppDispacth = useDispatch

export function useUserActions() {
  // const [isInitializing, setIsInitializing] = useState(true); 
  const [isLoading, serIsLoading] = useState(false); 

  const users = useAppSelector(({ users }) => users)
  const dispatch = useAppDispacth()

  const getUsersValue = () => {
    serIsLoading(true)
    // setIsInitializing(true)
    const newUsers = getUsers()
    dispatch(assignData(newUsers))    
  }

  const addNewUser = async({ name, email, github }:  Omit<User, 'id'>) => {
    const id = crypto.randomUUID()
    serIsLoading(true)
    dispatch(addUser({ name, email, github, id }))
  }
  const deleteUser = async(id: string) => {
    serIsLoading(true)
    dispatch(deleteUserById(id))
  }


  // Forma de no acoplar, pero media nefast, mejor con el midleware
  // useEffect(() => {
  //   if (isInitializing && users.length > 0) {      
  //     setIsInitializing(false);
  //   }
  // }, [users, isInitializing]);

  // useEffect(() => {
  //   serIsLoading(false)
  //   if (!isInitializing) {      
  //     updateUsers(users);
  //   }
  // }, [users, isInitializing]); 

  return {
    users,
    deleteUser,
    getUsersValue,
    isLoading,
    addNewUser
  }
} 