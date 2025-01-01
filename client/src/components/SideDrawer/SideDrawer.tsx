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
import { ICON_SET_NAMES } from '../../constants.ts';

interface SideDrawerProps {
    handleSetSelectedButtons: (libraryName: string) => void;
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
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleChoice = (libraryName: string) => {
        handleSetSelectedButtons(libraryName);
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
                {Object.values(ICON_SET_NAMES).map((text, index) => (
                    <ListItem key={text + index} disablePadding>
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
