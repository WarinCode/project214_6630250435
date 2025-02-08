import { Ref } from "vue";
import UserModel from "./models/user";
import CourseModel from "./models/course";
import { GPAXType } from "./models/gpa";
import { Options } from "@emailjs/browser/es/types/Options";

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

export interface CourseProviderType {
  courses: Ref<CourseModel[]>;
  gpaxObject: Ref<GPAXType>;
  fetchData: <T>(url: string, ref: Ref<T>) => Promise<void>;
}

export interface IconType {
  iconPath: string;
}

export interface OnClick {
  onClick?: (event: MouseEvent) => void;
}

export interface EmailJSOptions extends Options { }
export interface EmailJSConfigs {
  serviceID: string;
  templateID: string;
  options?: Options | string
}

export interface ContactRef {
  senderName: Ref<string>;
  email: Ref<string>;
  message: Ref<string>;
  date: Ref<string>
}

export interface ContactDetails {
  senderName: string;
  email: string;
  message: string;
  date: string
}