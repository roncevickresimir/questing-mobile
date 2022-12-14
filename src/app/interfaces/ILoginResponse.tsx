import IUser from "./IUser";

export default interface ILoginResponse extends IUser {
  token: string;
}
export interface IRegisterResponse {
  id: string;
  username: string;
  email: string;
  password: string;
}
