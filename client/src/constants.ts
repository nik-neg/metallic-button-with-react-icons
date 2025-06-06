import { reverseMap } from './utils.ts';

export const BACKGROUND_COLOR = 'black';

export const ICON_SET_NAMES: Record<string, string> = {
    ai: 'Ant Design Icons',
    bi: 'BoxIcons',
    bs: 'Bootstrap Icons',
    ci: 'Circum Icons',
    cg: 'css.gg Icons',
    di: 'Devicons',
    fa: 'Font Awesome Icons',
    fa6: 'Font Awesome 6',
    fc: 'Flat Color Icons',
    fi: 'Feather Icons',
    gi: 'Game Icons',
    go: 'Octicons (GitHub)',
    gr: 'Grommet Icons',
    hi: 'Heroicons',
    im: 'IcoMoon',
    io: 'Ionicons',
    io5: 'Ionicons 5',
    lu: 'Lucide Icons',
    md: 'Material Design Icons',
    ri: 'Remix Icon',
    rx: 'Radix Icons',
    si: 'Simple Icons',
    sl: 'Simple Line Icons',
    tb: 'Tabler Icons',
    tfi: 'Themify Icons',
    ti: 'Typicons',
    vsc: 'VS Code Icons',
    wi: 'Weather Icons',
};

export const NAMES_SET_ICONS: Record<string, string> =
    reverseMap(ICON_SET_NAMES);

export type ReactIconsKeys = keyof typeof ICON_SET_NAMES;
