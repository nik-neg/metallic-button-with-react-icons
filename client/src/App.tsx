import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import ButtonIconList from './components/ButtonIconList/ButtonIconList.tsx';

function App() {
    return (
        <SAppContainer>
            <SAppContainerColumn>
                <SideDrawer />
            </SAppContainerColumn>
            <SAppContainerColumn>
                <ButtonIconList />
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
