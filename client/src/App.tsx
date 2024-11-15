import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import { useState } from 'react';
import {
    IconLibraries,
    iconLibraryMap,
} from './components/lists/constants.tsx';

function App() {
    const [selectedButtons, setSelectedButtons] = useState<IconLibraries>(
        IconLibraries.AntDesignIcons
    );

    console.log({ selectedButtons });
    const handleSetSelectedButtons = (value: IconLibraries) => {
        setSelectedButtons(value);
    };
    return (
        <SAppContainer>
            <SAppContainerColumn>
                <SideDrawer
                    handleSetSelectedButtons={handleSetSelectedButtons}
                />
            </SAppContainerColumn>
            <SAppContainerColumn>
                {iconLibraryMap[selectedButtons]}
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
