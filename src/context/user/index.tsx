import { useContext, useReducer, createContext } from "react";

import { StatusReq } from "../../types/api";
import Thunk from "./reducer";
import { GetUsersType, InitState, PostUserType } from "./type";

const UserStateContext = createContext<InitState | null>(null);
const UserDispatchContext = createContext<any>(null);

const reducer = (currentState: InitState, newState: InitState) => ({
  ...currentState,
  ...newState,
});

const useUserState = () => {
  const context = useContext(UserStateContext);
  if (!context) throw new Error("useUserState must be used in UserProvider");

  return context;
};

const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);
  if (!context) throw new Error("useUserDispatch must be used in UserProvider");

  return context;
};

const initialState: InitState = {
  status: StatusReq.idle,
  users: [],
  error: null,
};

const UserProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const getUsers: GetUsersType = async (dispatch, params) =>
  Thunk.getUsers(dispatch, params);

const createUser: PostUserType = async (dispatch, createUser) =>
  Thunk.createUser(dispatch, createUser);

export { UserProvider, useUserState, useUserDispatch, getUsers, createUser };
