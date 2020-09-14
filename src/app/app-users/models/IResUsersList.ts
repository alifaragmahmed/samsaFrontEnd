export interface IResUsersList {
  _id: string;
  published: boolean;
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  gender?: number;
  status?: boolean;
  createdOn?: Date;
  avatar?: string;
  role: any;
}
