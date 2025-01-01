import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import { useEffect, useState } from 'react';
import { ButtonIconList } from './components/ButtonIconList/ButtonIconList.tsx';
import { IButtonData } from './components/ButtonIconList/types.ts';
import { useIcons } from './hooks/useIcons.ts';
import { useDispatch } from 'react-redux';
import { initStore } from './store/reducer/iconReducer.ts';

// use redux ?
function App() {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');

    const [filteredIcons, setFilteredIcons] = useState<IButtonData[]>([]);

    const { iconsBySet } = useIcons();

    useEffect(() => {
        // init store
        dispatch(initStore(iconsBySet));
    }, [iconsBySet]);

    const handleSetSearchTerm = async (value: string) => {
        setSearchTerm(value);
    };

    const [selectedButtonsList, setSelectedButtonsList] = useState('ai');

    const handleSetSelectedButtons = (libraryName: string) => {
        setSearchTerm('');
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
                    <ButtonIconList icons={filteredIcons} />
                ) : (
                    <ButtonIconList icons={iconsBySet[selectedButtonsList]} />
                )}
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
