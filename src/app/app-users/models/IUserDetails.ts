export interface IUserDetails {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  gender?: number;
  status?: boolean;
  createdOn?: Date;
  avatar?: string;
  interestedCategory?: any;
  role: any;
}
