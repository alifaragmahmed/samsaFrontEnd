export interface IReqUpdateUser {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  gender?: number;
  status?: boolean;
  createdOn?: Date;
  avatar?: string;
  accountType?: number; //will be enum   1- individual	   2- privateSector   3- Government
  interestedCategory?: any;
  role: any;
}
