export enum StatusReq {
  idle = "idle",
  pending = "pending",
  resolved = "resolved",
  rejected = "rejected",
}

export interface GetUsersParams {
  page?: number;
  limit?: number;
}
