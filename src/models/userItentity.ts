import { UserToken } from ".";

export interface UserIdentity extends UserToken {
  email: string;
  firstName: string;
}
