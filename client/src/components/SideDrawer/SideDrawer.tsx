import { ChangeEvent, useState } from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
} from '@mui/material';
import { IconLibraries } from '../lists/constants.tsx';

interface SideDrawerProps {
    handleSetSelectedButtons: (value: IconLibraries) => void;
    handleSetSearchTerm: (value: string) => void;
    searchTerm: string;
}

export const SideDrawer = ({
    handleSetSelectedButtons,
    handleSetSearchTerm,
    searchTerm,
}: SideDrawerProps) => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        handleSetSearchTerm(value);

        // const filtered = Object.keys(iconLibraryMap)
        //     .filter((key) => key.toLowerCase().includes(value.toLowerCase()))
        //     .map((key) => iconLibraryMap[key as keyof typeof iconLibraryMap]);
        //
        // setFilteredLibraries(filtered);
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleChoice = (text: string) => {
        handleSetSelectedButtons(text as IconLibraries);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <TextField
                label="Search Icon Libraries"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <List>
                {Object.values(IconLibraries).map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleChoice(text)}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer open={open} variant={'permanent'}>
            {DrawerList}
        </Drawer>
    );
};
