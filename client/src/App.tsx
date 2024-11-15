import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import {
    SAppContainer,
    SAppContainerColumn,
    SButton,
    SButtonContainer,
    SButtonLabel,
    SButtonListContainer,
} from './App.styles.ts';
import {
    VscAccount,
    VscActivateBreakpoints,
    VscAdd,
    VscArchive,
    VscArrowBoth,
    VscArrowCircleDown,
    VscArrowCircleLeft,
    VscArrowCircleRight,
    VscArrowCircleUp,
    VscArrowDown,
    VscArrowLeft,
    VscArrowRight,
    VscArrowSmallDown,
    VscArrowSmallLeft,
    VscArrowSmallRight,
    VscArrowSmallUp,
    VscArrowSwap,
    VscArrowUp,
    VscAzure,
    VscAzureDevops,
    VscBeaker,
    VscBeakerStop,
    VscBell,
    VscBellDot,
    VscBellSlash,
    VscBellSlashDot,
    VscBlank,
    VscBold,
    VscBook,
    VscBookmark,
    VscBracketDot,
    VscBracketError,
    VscBriefcase,
    VscBroadcast,
    VscBrowser,
    VscBug,
    VscCalendar,
    VscCallIncoming,
    VscCallOutgoing,
    VscCaseSensitive,
    VscCheck,
    VscCheckAll,
    VscChecklist,
    VscChevronDown,
    VscChevronLeft,
    VscChevronRight,
    VscChevronUp,
    VscChip,
    VscChromeClose,
    VscChromeMaximize,
    VscChromeMinimize,
    VscChromeRestore,
    VscCircle,
    VscCircleFilled,
    VscCircleLarge,
    VscCircleLargeFilled,
    VscCircleSlash,
    VscCircleSmall,
    VscCircleSmallFilled,
    VscCircuitBoard,
    VscClearAll,
    VscClippy,
    VscClose,
    VscCloseAll,
    VscCloud,
    VscCloudDownload,
    VscCloudUpload,
    VscCode,
    VscCodeOss,
    VscCoffee,
    VscCollapseAll,
    VscColorMode,
    VscCombine,
    VscComment,
    VscCommentDiscussion,
    VscCommentDraft,
    VscCommentUnresolved,
    VscCompass,
    VscCompassActive,
    VscCompassDot,
    VscCopilot,
    VscCopy,
    VscCoverage,
    VscCreditCard,
    VscDash,
    VscDashboard,
    VscDatabase,
    VscDebugAll,
    VscDebugAlt,
    VscDebugAltSmall,
    VscDebugBreakpointConditional,
    VscDebugBreakpointConditionalUnverified,
    VscDebugBreakpointData,
    VscDebugBreakpointDataUnverified,
    VscDebugBreakpointFunction,
    VscDebugBreakpointFunctionUnverified,
    VscDebugBreakpointLog,
    VscDebugBreakpointLogUnverified,
    VscDebugBreakpointUnsupported,
    VscDebugConsole,
} from 'react-icons/vsc';
import { useState } from 'react';
import { ICON_LIBRARIES } from './constants.ts';

function App() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {ICON_LIBRARIES.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <SAppContainer>
            <SAppContainerColumn>
                <Drawer open={open} variant={'permanent'}>
                    {DrawerList}
                </Drawer>
            </SAppContainerColumn>
            <SAppContainerColumn>
                <SButtonListContainer>
                    <SButtonContainer>
                        <SButton>
                            <VscAccount size={25} aria-label={'Account'} />
                        </SButton>
                        <SButtonLabel>VscAccount</SButtonLabel>
                    </SButtonContainer>

                    <SButton>
                        <VscActivateBreakpoints size={25} />
                    </SButton>
                    <SButton>
                        <VscAdd size={25} />
                    </SButton>
                    <SButton>
                        <VscArchive size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowBoth size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowCircleDown size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowCircleLeft size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowCircleRight size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowCircleUp size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowDown size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowLeft size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowRight size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowSmallDown size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowSmallLeft size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowSmallRight size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowSmallUp size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowSwap size={25} />
                    </SButton>
                    <SButton>
                        <VscArrowUp size={25} />
                    </SButton>
                    <SButton>
                        <VscAzureDevops size={25} />
                    </SButton>
                    <SButton>
                        <VscAzure size={25} />
                    </SButton>
                    <SButton>
                        <VscBeakerStop size={25} />
                    </SButton>
                    <SButton>
                        <VscBeaker size={25} />
                    </SButton>
                    <SButton>
                        <VscBellDot size={25} />
                    </SButton>
                    <SButton>
                        <VscBellSlashDot size={25} />
                    </SButton>
                    <SButton>
                        <VscBellSlash size={25} />
                    </SButton>
                    <SButton>
                        <VscBell size={25} />
                    </SButton>
                    <SButton>
                        <VscBlank size={25} />
                    </SButton>
                    <SButton>
                        <VscBold size={25} />
                    </SButton>
                    <SButton>
                        <VscBook size={25} />
                    </SButton>
                    <SButton>
                        <VscBookmark size={25} />
                    </SButton>
                    <SButton>
                        <VscBracketDot size={25} />
                    </SButton>
                    <SButton>
                        <VscBracketError size={25} />
                    </SButton>
                    <SButton>
                        <VscBriefcase size={25} />
                    </SButton>
                    <SButton>
                        <VscBroadcast size={25} />
                    </SButton>
                    <SButton>
                        <VscBrowser size={25} />
                    </SButton>
                    <SButton>
                        <VscBug size={25} />
                    </SButton>
                    <SButton>
                        <VscCalendar size={25} />
                    </SButton>
                    <SButton>
                        <VscCallIncoming size={25} />
                    </SButton>
                    <SButton>
                        <VscCallOutgoing size={25} />
                    </SButton>
                    <SButton>
                        <VscCaseSensitive size={25} />
                    </SButton>
                    <SButton>
                        <VscCheckAll size={25} />
                    </SButton>
                    <SButton>
                        <VscCheck size={25} />
                    </SButton>
                    <SButton>
                        <VscChecklist size={25} />
                    </SButton>
                    <SButton>
                        <VscChevronDown size={25} />
                    </SButton>
                    <SButton>
                        <VscChevronLeft size={25} />
                    </SButton>
                    <SButton>
                        <VscChevronRight size={25} />
                    </SButton>
                    <SButton>
                        <VscChevronUp size={25} />
                    </SButton>
                    <SButton>
                        <VscChip size={25} />
                    </SButton>
                    <SButton>
                        <VscChromeClose size={25} />
                    </SButton>
                    <SButton>
                        <VscChromeMaximize size={25} />
                    </SButton>
                    <SButton>
                        <VscChromeMinimize size={25} />
                    </SButton>
                    <SButton>
                        <VscChromeRestore size={25} />
                    </SButton>
                    <SButton>
                        <VscCircleFilled size={25} />
                    </SButton>
                    <SButton>
                        <VscCircleLargeFilled size={25} />
                    </SButton>
                    <SButton>
                        <VscCircleLarge size={25} />
                    </SButton>
                    <SButton>
                        <VscCircleSlash size={25} />
                    </SButton>
                    <SButton>
                        <VscCircleSmallFilled size={25} />
                    </SButton>
                    <SButton>
                        <VscCircleSmall size={25} />
                    </SButton>
                    <SButton>
                        <VscCircle size={25} />
                    </SButton>
                    <SButton>
                        <VscCircuitBoard size={25} />
                    </SButton>
                    <SButton>
                        <VscClearAll size={25} />
                    </SButton>
                    <SButton>
                        <VscClippy size={25} />
                    </SButton>
                    <SButton>
                        <VscCloseAll size={25} />
                    </SButton>
                    <SButton>
                        <VscClose size={25} />
                    </SButton>
                    <SButton>
                        <VscCloudDownload size={25} />
                    </SButton>
                    <SButton>
                        <VscCloudUpload size={25} />
                    </SButton>
                    <SButton>
                        <VscCloud size={25} />
                    </SButton>
                    <SButton>
                        <VscCodeOss size={25} />
                    </SButton>
                    <SButton>
                        <VscCode size={25} />
                    </SButton>
                    <SButton>
                        <VscCoffee size={25} />
                    </SButton>
                    <SButton>
                        <VscCollapseAll size={25} />
                    </SButton>
                    <SButton>
                        <VscColorMode size={25} />
                    </SButton>
                    <SButton>
                        <VscCombine size={25} />
                    </SButton>
                    <SButton>
                        <VscCommentDiscussion size={25} />
                    </SButton>
                    <SButton>
                        <VscCommentDraft size={25} />
                    </SButton>
                    <SButton>
                        <VscCommentUnresolved size={25} />
                    </SButton>
                    <SButton>
                        <VscComment size={25} />
                    </SButton>
                    <SButton>
                        <VscCompassActive size={25} />
                    </SButton>
                    <SButton>
                        <VscCompassDot size={25} />
                    </SButton>
                    <SButton>
                        <VscCompass size={25} />
                    </SButton>
                    <SButton>
                        <VscCopilot size={25} />
                    </SButton>
                    <SButton>
                        <VscCopy size={25} />
                    </SButton>
                    <SButton>
                        <VscCoverage size={25} />
                    </SButton>
                    <SButton>
                        <VscCreditCard size={25} />
                    </SButton>
                    <SButton>
                        <VscDash size={25} />
                    </SButton>
                    <SButton>
                        <VscDashboard size={25} />
                    </SButton>
                    <SButton>
                        <VscDatabase size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugAll size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugAltSmall size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugAlt size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointConditionalUnverified size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointConditional size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointDataUnverified size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointData size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointFunctionUnverified size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointFunction size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointLogUnverified size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointLog size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugBreakpointUnsupported size={25} />
                    </SButton>
                    <SButton>
                        <VscDebugConsole size={25} />
                    </SButton>
                </SButtonListContainer>
            </SAppContainerColumn>
        </SAppContainer>
    );
}

export default App;
