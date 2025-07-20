import { GetUsersParams, StatusReq } from "../../types/api";
import { UserType } from "../../types/user";

export type InitState = {
  status: StatusReq;
  users: UserType[] | [];
  error: string | null | unknown;
};

export type DispatchAction = (action: Partial<InitState>) => void;

export type GetUsersType = (
  dispatch: DispatchAction,
  params: GetUsersParams,
) => void;
