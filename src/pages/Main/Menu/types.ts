import { ReactNode } from "react";

type NavigationMenuButtonSub = {
    text: string;
    path: string;
    icon?: ReactNode;
}

export type NagivationMenuButton = {
    id: number;
    text: string;
    icon: ReactNode;
    subMenu?: {
        options: Array<NavigationMenuButtonSub>;
    }
    path: string;
}

export type NavigationMenuProps = {
    display: boolean;
}