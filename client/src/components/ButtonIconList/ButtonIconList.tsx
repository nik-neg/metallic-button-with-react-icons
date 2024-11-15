import { IButtonIconListProps } from './types';
import {
    SButton,
    SButtonContainer,
    SButtonLabel,
    SButtonListContainer,
} from './ButtonIconList.styles.ts';

export const ButtonIconList = ({ icons }: IButtonIconListProps) => {
    console.log({ icons });
    return (
        <SButtonListContainer>
            {icons.map(({ Icon, label }) => (
                <SButtonContainer>
                    <SButton>
                        <Icon size={25} aria-label={label} />
                    </SButton>
                    <SButtonLabel>{label}</SButtonLabel>
                </SButtonContainer>
            ))}
        </SButtonListContainer>
    );
};
