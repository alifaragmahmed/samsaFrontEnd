export interface IReqCreateUser {
  name: string;
  email: string;
  password: string;
  status?: boolean;
  createdOn?: Date;
  avatar?: string;
  role: any;
}
