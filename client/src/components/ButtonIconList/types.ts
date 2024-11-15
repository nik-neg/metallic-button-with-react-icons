import { IconType } from 'react-icons';

export interface IButtonIconListProps {
    icons: IButtonData[];
}

interface IButtonData {
    Icon: IconType;
    label: string;
}
