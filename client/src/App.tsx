import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import ButtonIconListAi from './components/lists/ButtonIconListAi.tsx';

function App() {
    return (
        <SAppContainer>
            <SAppContainerColumn>
                <SideDrawer />
            </SAppContainerColumn>
            <SAppContainerColumn>
                <ButtonIconListAi />
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
