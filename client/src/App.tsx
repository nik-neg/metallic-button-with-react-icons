import { SAppContainer, SAppContainerColumn } from './App.styles.ts';
import { SideDrawer } from './components/SideDrawer/SideDrawer.tsx';
import { useState } from 'react';
import {
    IconLibraries,
    iconLibraryMap,
} from './components/lists/constants.tsx';
import { ButtonIconList } from './components/ButtonIconList/ButtonIconList.tsx';
import { IButtonData } from './components/ButtonIconList/types.ts';
import { allIconData } from './iconsArray.ts';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const [filteredIcons, setFilteredIcons] = useState<IButtonData[]>([]);

    console.log({ searchTerm });

    const handleSetSearchTerm = async (value: string) => {
        setSearchTerm(value);

        // Filter icons based on the search term
        const labelsAndRelativePath = allIconData.filter(({ label }) =>
            label.toLowerCase().includes(value.toLowerCase())
        );

        // search lists in paralellel

        // load set of modules to load

        // loop over labels and assign icon

        console.log({ labelsAndRelativePath });

        // Load icons dynamically
        const promises = labelsAndRelativePath.map(
            async ({ label, relativePath }) => {
                try {
                    // Dynamically import the module based on relativePath
                    const module = await import(
                        `../node_modules/react-icons/${relativePath}`
                    );

                    // Access the named export dynamically
                    const Icon = module[label];
                    if (!Icon) {
                        console.error(
                            `Icon ${label} not found in module ${relativePath}`
                        );
                        return null;
                    }

                    return { label, Icon };
                } catch (error) {
                    console.error(
                        `Failed to import module react-icons/${relativePath}`,
                        error
                    );
                    return null; // Graceful fallback
                }
            }
        );

        // Resolve all promises and filter out null results
        const icons = (await Promise.all(promises)).filter(Boolean);
        setFilteredIcons(icons);
    };

    const [selectedButtonsList, setSelectedButtonsList] =
        useState<IconLibraries>(IconLibraries.AntDesignIcons);

    console.log({ selectedButtons: selectedButtonsList });
    const handleSetSelectedButtons = (value: IconLibraries) => {
        setSearchTerm('');
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
                {searchTerm ? (
                    <ButtonIconList icons={filteredIcons} />
                ) : (
                    iconLibraryMap[selectedButtonsList]
                )}
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
