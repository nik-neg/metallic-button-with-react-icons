import { IconType } from 'react-icons';

export interface IButtonIconListProps {
    icons: IButtonData[];
}

export interface IButtonData {
    Icon: IconType;
    label: string;
    relativePath?: string;
}
