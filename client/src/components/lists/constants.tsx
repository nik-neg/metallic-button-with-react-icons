import { ButtonIconListAi } from './ButtonIconListAi';
import { ButtonIconListCi } from './ButtonIconListCi';
import { ButtonIconListFc } from './ButtonIconListFc';
import { ButtonIconListFa6 } from './ButtonIconListFa6';
import { ButtonIconListGi } from './ButtonIconListGi';
import { ButtonIconListGo } from './ButtonIconListGo';
import { ButtonIconListHi } from './ButtonIconListHi';
import { ButtonIconListHi2 } from './ButtonIconListHi2';
import ButtonIconListBs from './ButtonIconListBs.tsx';
import ButtonIconListBi from './ButtonIconListBi.tsx';
import ButtonIconListCg from './ButtonIconListCg.tsx';
import ButtonIconListDi from './ButtonIconListDi.tsx';
import ButtonIconListFi from './ButtonIconListFi.tsx';
import ButtonIconListFa from './ButtonIconListFa.tsx';
import ButtonIconListGr from './ButtonIconListGr.tsx';

// Enum for Icon Libraries
export enum IconLibraries {
    AntDesignIcons = 'AntDesignIcons',
    BootstrapIcons = 'BootstrapIcons',
    BoxIcons = 'BoxIcons',
    CircumIcons = 'CircumIcons',
    CssGg = 'CssGg',
    Devicons = 'Devicons',
    Feather = 'Feather',
    FlatColorIcons = 'FlatColorIcons',
    FontAwesome5 = 'FontAwesome5',
    FontAwesome6 = 'FontAwesome6',
    GameIcons = 'GameIcons',
    GithubOcticons = 'GithubOcticons',
    GrommetIcons = 'GrommetIcons',
    Heroicons = 'Heroicons',
    Heroicons2 = 'Heroicons2',
    IcoMoonFree = 'IcoMoonFree',
    Icons8LineAwesome = 'Icons8LineAwesome',
    Ionicons4 = 'Ionicons4',
    Ionicons5 = 'Ionicons5',
    Lucide = 'Lucide',
    MaterialDesignIcons = 'MaterialDesignIcons',
    PhosphorIcons = 'PhosphorIcons',
    RadixIcons = 'RadixIcons',
    RemixIcon = 'RemixIcon',
    SimpleIcons = 'SimpleIcons',
    SimpleLineIcons = 'SimpleLineIcons',
    TablerIcons = 'TablerIcons',
    ThemifyIcons = 'ThemifyIcons',
    Typicons = 'Typicons',
    VSCodeIcons = 'VSCodeIcons',
    WeatherIcons = 'WeatherIcons',
}

// Enum for Icon Abbreviations
export enum IconAbbreviations {
    AntDesignIcons = 'ai',
    BootstrapIcons = 'bi',
    BoxIcons = 'bx',
    CircumIcons = 'ci',
    CssGg = 'gg',
    Devicons = 'devicons',
    Feather = 'feather',
    FlatColorIcons = 'fc',
    FontAwesome5 = 'fa5',
    FontAwesome6 = 'fa6',
    GameIcons = 'gi',
    GithubOcticons = 'go',
    GrommetIcons = 'gi',
    Heroicons = 'hi',
    Heroicons2 = 'hi2',
    IcoMoonFree = 'imf',
    Icons8LineAwesome = 'ia',
    Ionicons4 = 'i4',
    Ionicons5 = 'i5',
    Lucide = 'lucide',
    MaterialDesignIcons = 'mdi',
    PhosphorIcons = 'ph',
    RadixIcons = 'ri',
    RemixIcon = 'ri',
    SimpleIcons = 'si',
    SimpleLineIcons = 'sli',
    TablerIcons = 'ti',
    ThemifyIcons = 'ti',
    Typicons = 'ty',
    VSCodeIcons = 'vsc',
    WeatherIcons = 'wi',
}

// Map of Icon Libraries to corresponding React components
export const iconLibraryMap: { [key in IconLibraries]: React.ComponentType } = {
    [IconLibraries.AntDesignIcons]: ButtonIconListAi,
    [IconLibraries.BootstrapIcons]: ButtonIconListBs,
    [IconLibraries.BoxIcons]: ButtonIconListBi,
    [IconLibraries.CircumIcons]: ButtonIconListCi,
    [IconLibraries.CssGg]: ButtonIconListCg,
    [IconLibraries.Devicons]: ButtonIconListDi,
    [IconLibraries.Feather]: ButtonIconListFi,
    [IconLibraries.FlatColorIcons]: ButtonIconListFc,
    [IconLibraries.FontAwesome5]: ButtonIconListFa,
    [IconLibraries.FontAwesome6]: ButtonIconListFa6,
    [IconLibraries.GameIcons]: ButtonIconListGi,
    [IconLibraries.GithubOcticons]: ButtonIconListGo,
    [IconLibraries.GrommetIcons]: ButtonIconListGr,
    [IconLibraries.Heroicons]: ButtonIconListHi,
    [IconLibraries.Heroicons2]: ButtonIconListHi2,
    // [IconLibraries.IcoMoonFree]: ButtonIconListImf,
    // [IconLibraries.Icons8LineAwesome]: ButtonIconListIa,
    // [IconLibraries.Ionicons4]: ButtonIconListI4,
    // [IconLibraries.Ionicons5]: ButtonIconListI5,
    // [IconLibraries.Lucide]: ButtonIconListLucide,
    // [IconLibraries.MaterialDesignIcons]: ButtonIconListMdi,
    // [IconLibraries.PhosphorIcons]: ButtonIconListPh,
    // [IconLibraries.RadixIcons]: ButtonIconListRi,
    // [IconLibraries.RemixIcon]: ButtonIconListRi,
    // [IconLibraries.SimpleIcons]: ButtonIconListSi,
    // [IconLibraries.SimpleLineIcons]: ButtonIconListSli,
    // [IconLibraries.TablerIcons]: ButtonIconListTi,
    // [IconLibraries.VSCodeIcons]: ButtonIconListVsc,
    // [IconLibraries.WeatherIcons]: ButtonIconListWi,
};
