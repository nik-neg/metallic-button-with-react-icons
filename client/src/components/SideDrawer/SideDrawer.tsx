import { useState } from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { IconLibraries } from '../lists/constants.tsx';

interface SideDrawerProps {
    handleSetSelectedButtons: (value: IconLibraries) => void;
}

export const SideDrawer = ({ handleSetSelectedButtons }: SideDrawerProps) => {
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
