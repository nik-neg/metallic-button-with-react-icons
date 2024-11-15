import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import ButtonIconListAi from './components/lists/ButtonIconListAi.tsx';
import { useState } from 'react';

function App() {
    const [selectedButtons, setSelectedButtons] = useState<string>('');

    console.log({ selectedButtons });
    const handleSetSelectedButtons = (value: string) => {
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
                <ButtonIconListAi />
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
