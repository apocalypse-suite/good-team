import {UserRole} from './enums/user-role.enum';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}
