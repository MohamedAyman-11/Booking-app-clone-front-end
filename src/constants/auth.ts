import type {LOGIN_FIELDS, REGISTER_FIELDS} from "../interfaces";

export const REGISTER_FIELDS_DATA: REGISTER_FIELDS[] = [
  {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Enter your name",
    label: "Name",
  },
  {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Enter your email address",
    label: "Email address",
  },
  {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Enter your password",
    label: "Password",
  },
  {
    type: "password",
    name: "confirm_password",
    id: "confirm_password",
    placeholder: "Confirm your password",
    label: "Confirm password",
  },
];

export const LOGIN_FIELDS_DATA: LOGIN_FIELDS[] = [
  {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Enter your email address",
    label: "Email address",
  },
  {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Enter your password",
    label: "Password",
  },
];