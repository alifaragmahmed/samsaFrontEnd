import {IResUsersList} from './IResUsersList';

export interface IResGetPage {
  data: IResUsersList[];
  total: number;
  numberOfPages: number;
}
