import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { IButtonData, IButtonIconListProps } from './types';
import {
    SButton,
    SButtonContainer,
    SButtonLabel,
    SButtonListContainer,
} from './ButtonIconList.styles.ts';

export const ButtonIconList = ({ labels }: IButtonIconListProps) => {
    const [labelsWithIcons, setLabelsWithIcons] = useState<IButtonData[]>([]);

    console.log({ labels });

    useEffect(() => {
        const loadIcons = async () => {
            const newLabelsWithIcons: IButtonData[] = [];

            for (const item of labels) {
                const iconName = item.label; // e.g. "AiFillAlert"
                const prefix = iconName.slice(0, 2).toLowerCase(); // => "ai"

                try {
                    // Dynamically import from `react-icons/<prefix>`
                    const iconModule = await import(`react-icons/${prefix}`);
                    const Icon = iconModule[iconName] as IconType;

                    if (!Icon) {
                        console.warn(
                            `Icon "${iconName}" not found in "react-icons/${prefix}"`
                        );
                        // Optionally provide a fallback icon or skip
                        continue;
                    }

                    newLabelsWithIcons.push({
                        label: iconName,
                        Icon,
                    });
                } catch (error) {
                    console.error(`Error loading icon "${iconName}":`, error);
                }
            }

            setLabelsWithIcons(newLabelsWithIcons);
        };

        loadIcons();
    }, [labels]);

    console.log({ labelsWithIcons });

    return (
        <SButtonListContainer>
            {labelsWithIcons.map(({ Icon, label }, idx) => (
                <SButtonContainer key={`${label}-${idx}`}>
                    <SButton>
                        <Icon size={25} aria-label={label} />
                    </SButton>
                    <SButtonLabel>{label}</SButtonLabel>
                </SButtonContainer>
            ))}
        </SButtonListContainer>
    );
};
