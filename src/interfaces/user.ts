import type {Image, Provider, UserRole} from "./common";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
  provider?: Provider;
  photo: Image;
  createdAt: string;
}