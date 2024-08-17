import { useEffect, useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispacth, RootState } from "@/store";
import { deleteUserById, assignData } from "@/store/users/slice";

import { updateUsers } from "@/helpers/localStore";
import { getUsers } from "@/helpers/localStore";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispacth: () => AppDispacth = useDispatch

export function useUserActions() {


  const users = useAppSelector(state => state.users)

  const dispatch = useAppDispacth()

  const getUsersValue = () => {
    console.log(users);
    const newUsers = getUsers()
    console.log(newUsers);
    dispatch(assignData(newUsers))
  }


  const deleteUser = async(id: string) => {
    dispatch(deleteUserById(id))
  }

  const renderCount = useRef(0);

  useEffect(() => {    
    if (renderCount.current === 0) {
      renderCount.current +=1
    }
    else if (renderCount.current === 1) {
      console.log('cuando?');
      updateUsers(users)
    }
    
  }, [users])

  return {
    users,
    deleteUser,
    getUsersValue
  }
} 