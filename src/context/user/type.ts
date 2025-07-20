import { AxiosResponse } from "axios";
import { GetUsersParams, StatusReq } from "../../types/api";
import { CreateUserType, UserType } from "../../types/user";

export type InitState = {
  status: StatusReq;
  users: UserType[] | [];
  countUsers: number;
  error: string | null | unknown;
};

export type DispatchAction = (action: Partial<InitState>) => void;

export type GetUsersType = (
  dispatch: DispatchAction,
  params: GetUsersParams,
) => Promise<void>;

export type PostUserType = (
  dispatch: DispatchAction,
  createUser: CreateUserType,
) => Promise<AxiosResponse<any, any> | undefined>;

export type GetUsersCountType = (dispatch: DispatchAction) => Promise<void>;
