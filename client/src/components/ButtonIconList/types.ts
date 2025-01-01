import { IconType } from 'react-icons';

export interface IButtonIconListProps {
    labels: IButtonData[];
}

export interface IButtonData {
    Icon: IconType;
    label: string;
    // relativePath?: string;
}
