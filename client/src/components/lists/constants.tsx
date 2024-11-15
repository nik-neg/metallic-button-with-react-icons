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
import ButtonIconListIm from './ButtonIconListIm.tsx';
import ButtonIconListLia from './ButtonIconListLia.tsx';
import ButtonIconListIo from './ButtonIconListIo.tsx';
import ButtonIconListIo5 from './ButtonIconListIo5.tsx';
import ButtonIconListLu from './ButtonIconListLu.tsx';
import ButtonIconListMd from './ButtonIconListMd.tsx';
import ButtonIconListPi from './ButtonIconListPi.tsx';
import ButtonIconListRx from './ButtonIconListRx.tsx';
import ButtonIconListRi from './ButtonIconListRi.tsx';
import ButtonIconListSl from './ButtonIconListSl.tsx';
import ButtonIconListSi from './ButtonIconListSi.tsx';
import ButtonIconListTb from './ButtonIconListTb.tsx';
import ButtonIconListVsc from './ButtonIconListVsc.tsx';
import ButtonIconListWi from './ButtonIconListWi.tsx';

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
// Map of Icon Libraries to corresponding React components
export const iconLibraryMap: { [key in IconLibraries]: React.ComponentType } = {
    [IconLibraries.AntDesignIcons]: <ButtonIconListAi />, // JSX element for AntDesignIcons
    [IconLibraries.BootstrapIcons]: <ButtonIconListBs />, // JSX element for BootstrapIcons
    [IconLibraries.BoxIcons]: <ButtonIconListBi />, // JSX element for BoxIcons
    [IconLibraries.CircumIcons]: <ButtonIconListCi />, // JSX element for CircumIcons
    [IconLibraries.CssGg]: <ButtonIconListCg />, // JSX element for CssGg
    [IconLibraries.Devicons]: <ButtonIconListDi />, // JSX element for Devicons
    [IconLibraries.Feather]: <ButtonIconListFi />, // JSX element for Feather
    [IconLibraries.FlatColorIcons]: <ButtonIconListFc />, // JSX element for FlatColorIcons
    [IconLibraries.FontAwesome5]: <ButtonIconListFa />, // JSX element for FontAwesome5
    [IconLibraries.FontAwesome6]: <ButtonIconListFa6 />, // JSX element for FontAwesome6
    [IconLibraries.GameIcons]: <ButtonIconListGi />, // JSX element for GameIcons
    [IconLibraries.GithubOcticons]: <ButtonIconListGo />, // JSX element for GithubOcticons
    [IconLibraries.GrommetIcons]: <ButtonIconListGr />, // JSX element for GrommetIcons
    [IconLibraries.Heroicons]: <ButtonIconListHi />, // JSX element for Heroicons
    [IconLibraries.Heroicons2]: <ButtonIconListHi2 />, // JSX element for Heroicons2
    [IconLibraries.IcoMoonFree]: <ButtonIconListIm />, // JSX element for IcoMoonFree
    [IconLibraries.Icons8LineAwesome]: <ButtonIconListLia />, // JSX element for Icons8LineAwesome
    [IconLibraries.Ionicons4]: <ButtonIconListIo />, // JSX element for Ionicons4
    [IconLibraries.Ionicons5]: <ButtonIconListIo5 />, // JSX element for Ionicons5
    [IconLibraries.Lucide]: <ButtonIconListLu />, // JSX element for Lucide
    [IconLibraries.MaterialDesignIcons]: <ButtonIconListMd />, // JSX element for MaterialDesignIcons
    [IconLibraries.PhosphorIcons]: <ButtonIconListPi />, // JSX element for PhosphorIcons
    [IconLibraries.RadixIcons]: <ButtonIconListRx />, // JSX element for RadixIcons
    [IconLibraries.RemixIcon]: <ButtonIconListRi />, // JSX element for RemixIcon
    [IconLibraries.SimpleIcons]: <ButtonIconListSi />, // JSX element for SimpleIcons
    [IconLibraries.SimpleLineIcons]: <ButtonIconListSl />, // JSX element for SimpleLineIcons
    [IconLibraries.TablerIcons]: <ButtonIconListTb />, // JSX element for TablerIcons
    [IconLibraries.VSCodeIcons]: <ButtonIconListVsc />, // JSX element for VSCodeIcons
    [IconLibraries.WeatherIcons]: <ButtonIconListWi />, // JSX element for WeatherIcons
};
