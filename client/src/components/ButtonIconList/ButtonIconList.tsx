import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

// Statically import from react-icons
import * as aiIcons from 'react-icons/ai';
import * as biIcons from 'react-icons/bi';
import * as bsIcons from 'react-icons/bs';
import * as ciIcons from 'react-icons/ci';
import * as cgIcons from 'react-icons/cg';
import * as diIcons from 'react-icons/di';
import * as faIcons from 'react-icons/fa';
import * as fa6Icons from 'react-icons/fa6';
import * as fcIcons from 'react-icons/fc';
import * as fiIcons from 'react-icons/fi';
import * as giIcons from 'react-icons/gi';
import * as goIcons from 'react-icons/go';
import * as grIcons from 'react-icons/gr';
import * as hiIcons from 'react-icons/hi';
import * as imIcons from 'react-icons/im';
import * as ioIcons from 'react-icons/io';
import * as io5Icons from 'react-icons/io5';
import * as luIcons from 'react-icons/lu';
import * as mdIcons from 'react-icons/md';
import * as riIcons from 'react-icons/ri';
import * as rxIcons from 'react-icons/rx';
import * as siIcons from 'react-icons/si';
import * as slIcons from 'react-icons/sl';
import * as tbIcons from 'react-icons/tb';
import * as tfiIcons from 'react-icons/tfi';
import * as tiIcons from 'react-icons/ti';
import * as vscIcons from 'react-icons/vsc';
import * as wiIcons from 'react-icons/wi';
import {
    SButton,
    SButtonContainer,
    SButtonLabel,
    SButtonListContainer,
} from './ButtonIconList.styles';
import { IButtonData, IButtonIconListProps } from './types';

export const iconSets: Record<string, Record<string, IconType>> = {
    ai: aiIcons,
    bi: biIcons,
    bs: bsIcons,
    ci: ciIcons,
    cg: cgIcons,
    di: diIcons,
    fa: faIcons,
    fa6: fa6Icons,
    fc: fcIcons,
    fi: fiIcons,
    gi: giIcons,
    go: goIcons,
    gr: grIcons,
    hi: hiIcons,
    im: imIcons,
    io: ioIcons,
    io5: io5Icons,
    lu: luIcons,
    md: mdIcons,
    ri: riIcons,
    rx: rxIcons,
    si: siIcons,
    sl: slIcons,
    tb: tbIcons,
    tfi: tfiIcons,
    ti: tiIcons,
    vsc: vscIcons,
    wi: wiIcons,
};

export const ButtonIconList = ({ labels }: IButtonIconListProps) => {
    const [labelsWithIcons, setLabelsWithIcons] = useState<IButtonData[]>([]);

    useEffect(() => {
        const loadIcons = async () => {
            const newLabelsWithIcons: IButtonData[] = [];

            for (const iconName of labels ?? []) {
                // e.g. "AiFillAlert"
                const prefix = iconName.slice(0, 2).toLowerCase();
                // => "ai"

                // 2. Grab the icon module from the map
                const iconModule = iconSets[prefix];
                if (!iconModule) {
                    console.warn(
                        `Prefix "${prefix}" not found in iconSets map. ` +
                            `Icon "${iconName}" cannot be loaded.`
                    );
                    continue;
                }

                // 3. Attempt to get the icon by its name
                const Icon = iconModule[iconName] as IconType;
                if (!Icon) {
                    console.warn(
                        `Icon "${iconName}" not found in "react-icons/${prefix}".`
                    );
                    // Optionally provide a fallback icon or skip
                    continue;
                }

                // 4. Save to array
                newLabelsWithIcons.push({ label: iconName, Icon });
            }

            setLabelsWithIcons(newLabelsWithIcons);
        };

        loadIcons();
    }, [labels]);

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
