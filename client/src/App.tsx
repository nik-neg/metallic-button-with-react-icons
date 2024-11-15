import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import { useState } from 'react';
import {
    IconLibraries,
    iconLibraryMap,
} from './components/lists/constants.tsx';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    console.log({ searchTerm });

    const handleSetSearchTerm = (value: string) => {
        setSearchTerm(value);
    };

    const [selectedButtonsList, setSelectedButtonsList] =
        useState<IconLibraries>(IconLibraries.AntDesignIcons);

    console.log({ selectedButtons: selectedButtonsList });
    const handleSetSelectedButtons = (value: IconLibraries) => {
        setSelectedButtonsList(value);
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
                {iconLibraryMap[selectedButtonsList]}
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
