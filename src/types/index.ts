import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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

export interface Icon {
  icon: string | object | string[] | IconDefinition
}

export interface CardData<T extends object> {
  data: T;
}