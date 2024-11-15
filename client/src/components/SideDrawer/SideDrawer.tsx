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
    handleSetSelectedButtons: (value: string) => void;
}

export const SideDrawer = ({ handleSetSelectedButtons }: SideDrawerProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleChoice = (event: any) => {
        handleSetSelectedButtons(event.target.value);
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
                        <ListItemButton onClick={handleChoice}>
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
