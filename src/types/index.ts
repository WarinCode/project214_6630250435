import { Ref } from "vue";
import UserModel from "./models/user";

export interface NavItemData {
  text: string;
  href: string;
}

export interface Skill {
  name: string;
  path: string;
}

export interface TitleObject {
  title: string;
}

export interface CardData<T extends object> {
  data: T;
}

export type SomeValue<T> = T | any | unknown;

export interface UserProviderType {
  user: Ref<UserModel | null>;
  isError: Ref<boolean>;
}

export interface IconType {
  iconPath: string;
}

export interface OnClick {
  onClick?: (event: MouseEvent) => void;
}

export interface ScrollValues {
  x: number;
  y: number;
}