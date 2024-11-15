import styled from 'styled-components';
import { BACKGROUND_COLOR } from './constants.ts';

export const SAppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    display: flex;
    background-color: ${BACKGROUND_COLOR};
`;

export const SAppContainerColumn = styled.div`
    display: flex;
    flex: 1;
`;
