import { TitleObject, Skill, NavItemData, Icon, CardData } from ".";
import SchoolModel from "./models/school";
import UniversityModel from "./models/university";

interface ClassName {
    classname?: string;
}

export interface ContainerProps extends ClassName {
    id: string;
}

export interface CardContainerProps extends ClassName { }

export interface BackgroundLayerProps
    extends ClassName { }

export interface ButtonProps extends ClassName {
    text: string;
}

export interface DownloadButtonProps extends ButtonProps, IconProps {
    to: string;
}

export interface ContactButtonProps extends ButtonProps, IconProps {
    href: string;
    onClick?: () => void;
}

export interface ActionButtonProps extends ButtonProps, Icon {
    type: "button" | "submit" | "reset" | undefined;
    onClick(): void;
}

export interface LineProps extends ClassName { }
export interface TitleProps extends TitleObject { }
export interface SkillProps extends Skill { }
export interface NavLinkProps extends NavItemData { }

export interface IconProps extends ClassName {
    iconPath: string;
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