import { InputHTMLAttributes, SelectHTMLAttributes, HTMLAttributes, Ref, VNodeRef } from "vue";
import { TitleObject, Skill, NavItemData, CardData, IconType, OnClick } from ".";
import CourseModel, { Courses } from "./models/course";
import SchoolModel from "./models/school";
import UniversityModel from "./models/university";

interface ClassName {
    classname?: string;
}

export interface AppContainerProps extends ClassName { }

export interface ContainerProps extends ClassName {
    id: string;
}

export interface CardContainerProps extends ClassName { }

export interface BackgroundLayerProps
    extends ClassName { }

interface InputComponentProps<T extends HTMLAttributes> {
    attributes?: T;
    onInput: (e: Event) => void;
    value?: string | number;
    id: string;
    labelName: string;
}

export interface InputWrapperProps extends ClassName { }
export interface FormContainerProps extends ClassName { 
    onSubmit: () => void;
}
export interface InputFieldProps extends InputComponentProps<InputHTMLAttributes> {
}

export interface SelectFieldProps extends InputComponentProps<SelectHTMLAttributes> {
    optionList: string[] | number[];
}
export interface ButtonProps extends ClassName {
    text: string;
}

export interface DownloadButtonProps extends ButtonProps, IconProps {
    to: string;
}

export interface ContactButtonProps extends ButtonProps, IconProps, OnClick {
    href: string;
}

export interface ActionButtonProps extends ButtonProps, IconProps, Partial<OnClick> {
    type: "button" | "submit" | "reset" | undefined;
    iconClassName?: string;
}

export interface LineProps extends ClassName { }
export interface TitleProps extends TitleObject { }
export interface SkillProps extends Skill { }
export interface NavLinkProps extends NavItemData { }

export interface IconProps extends ClassName, IconType, OnClick {
}

export interface SchoolCardProps extends ClassName, CardData<SchoolModel> { }
export interface UniversityCardProps extends ClassName, CardData<UniversityModel> { }

export interface CardImageTopProps extends ClassName {
    src?: string;
    alt?: string;
}

export interface CardTitleProps extends TitleObject, ClassName { }
export interface CardHeaderProps extends ClassName { }
export interface CardBodyProps extends ClassName { }
export interface CardDetailsProps extends ClassName { }

export interface CardLinkProps extends IconProps, ClassName {
    href?: string;
}

export interface CourseProps extends CourseModel { }

export interface CoursesProps {
    courses: Courses;
}

export interface GPAXProps {
    gpax: number
}