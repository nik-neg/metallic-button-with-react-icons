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
import { ComponentType } from 'react';

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

export const iconLibraryMap: { [key in IconLibraries]: ComponentType } = {
    [IconLibraries.AntDesignIcons.toString()]: <ButtonIconListAi />,
    [IconLibraries.BootstrapIcons.toString()]: <ButtonIconListBs />,
    [IconLibraries.BoxIcons.toString()]: <ButtonIconListBi />,
    [IconLibraries.CircumIcons.toString()]: <ButtonIconListCi />,
    [IconLibraries.CssGg.toString()]: <ButtonIconListCg />,
    [IconLibraries.Devicons.toString()]: <ButtonIconListDi />,
    [IconLibraries.Feather.toString()]: <ButtonIconListFi />,
    [IconLibraries.FlatColorIcons.toString()]: <ButtonIconListFc />,
    [IconLibraries.FontAwesome5.toString()]: <ButtonIconListFa />,
    [IconLibraries.FontAwesome6.toString()]: <ButtonIconListFa6 />,
    [IconLibraries.GameIcons.toString()]: <ButtonIconListGi />,
    [IconLibraries.GithubOcticons.toString()]: <ButtonIconListGo />,
    [IconLibraries.GrommetIcons.toString()]: <ButtonIconListGr />,
    [IconLibraries.Heroicons.toString()]: <ButtonIconListHi />,
    [IconLibraries.Heroicons2.toString()]: <ButtonIconListHi2 />,
    [IconLibraries.IcoMoonFree.toString()]: <ButtonIconListIm />,
    [IconLibraries.Icons8LineAwesome.toString()]: <ButtonIconListLia />,
    [IconLibraries.Ionicons4.toString()]: <ButtonIconListIo />,
    [IconLibraries.Ionicons5.toString()]: <ButtonIconListIo5 />,
    [IconLibraries.Lucide.toString()]: <ButtonIconListLu />,
    [IconLibraries.MaterialDesignIcons.toString()]: <ButtonIconListMd />,
    [IconLibraries.PhosphorIcons.toString()]: <ButtonIconListPi />,
    [IconLibraries.RadixIcons.toString()]: <ButtonIconListRx />,
    [IconLibraries.RemixIcon.toString()]: <ButtonIconListRi />,
    [IconLibraries.SimpleIcons.toString()]: <ButtonIconListSi />,
    [IconLibraries.SimpleLineIcons.toString()]: <ButtonIconListSl />,
    [IconLibraries.TablerIcons.toString()]: <ButtonIconListTb />,
    [IconLibraries.VSCodeIcons.toString()]: <ButtonIconListVsc />,
    [IconLibraries.WeatherIcons.toString()]: <ButtonIconListWi />,
};
