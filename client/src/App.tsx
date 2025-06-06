import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import { useEffect, useState } from 'react';
import { IButtonData } from './components/ButtonIconList/types.ts';
import { useIcons } from './hooks/useIcons.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
    filterIcons,
    IconState,
    initStore,
} from './store/reducer/iconReducer.ts';
import { ButtonIconList } from './components/ButtonIconList/ButtonIconList.tsx';
import { NAMES_SET_ICONS, ReactIconsKeys } from './constants.ts';

// use redux ?
function App() {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');

    const [filteredIcons, setFilteredIcons] = useState<IButtonData[]>([]);

    const filteredIconsState = useSelector(
        (state: IconState) => state?.icons?.searchedIcons
    );

    console.log({ filteredIconsState });

    const { iconsBySet } = useIcons();

    useEffect(() => {
        dispatch(initStore(iconsBySet));
    }, [iconsBySet]);

    const handleSetSearchTerm = async (value: string) => {
        setSearchTerm(value);

        dispatch(filterIcons(value));
    };

    const [selectedButtonsList, setSelectedButtonsList] =
        useState<ReactIconsKeys>('ai');

    const handleSetSelectedButtons = (libraryName: string) => {
        setSearchTerm('');
        setSelectedButtonsList(NAMES_SET_ICONS[libraryName]);

        console.log({ libraryName });
        // choose list of icons
    };
    return (
        <SAppContainer>
            <SAppContainerColumn>
                <SideDrawer
                    handleSetSelectedButtons={handleSetSelectedButtons}
                    handleSetSearchTerm={handleSetSearchTerm}
                    searchTerm={searchTerm}
                />
            </SAppContainerColumn>
            <SAppContainerColumn>
                {searchTerm ? (
                    <ButtonIconList labels={filteredIconsState} />
                ) : (
                    <ButtonIconList labels={iconsBySet[selectedButtonsList]} />
                )}
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
