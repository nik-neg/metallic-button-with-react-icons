import styled, { css, keyframes } from 'styled-components';
import { BACKGROUND_COLOR } from '../../constants.ts';

const slide = keyframes`
    100% {
        transform: translateX(200%);
    }
`;

export const SButtonListContainer = styled.div`
    width: calc(100vw - 350px);
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 3rem;
`;

export const SButtonContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
`;

// make other buttons on hover zoom out
// click on button copies component
interface SButtonProps {
    width?: string;
    height?: string;
}

export const SButton = styled.button<SButtonProps>`
    width: ${({ width }) => width ?? '100px'};
    height: ${({ height }) => height ?? '3rem'};
    cursor: pointer;
    position: relative;
    overflow: hidden;

    border-width: 3px;
    border-radius: 10px;
    background: rgb(240, 240, 240);
    background: linear-gradient(
        90deg,
        rgba(240, 240, 240, 1) 0%,
        rgba(111, 111, 111, 1) 35%,
        rgba(111, 111, 111, 0.9402135854341737) 52%,
        rgba(111, 111, 111, 0.9402135854341737) 94%
    );

    transition:
        background 0.3s ease,
        transform 0.3s ease,
        border-color 0.3s ease;

    &:hover {
        &:after {
            content: '';
            top: 0;
            transform: translateX(-200%);
            width: 50px;
            height: 100%;
            position: absolute;
            z-index: 1;
            animation: ${slide} 1.65s 0.2s forwards;
            background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(128, 186, 232, 0) 99%,
                rgba(125, 185, 232, 0) 94%
            );
        }

        animation: changeBackground 0s ease 0.9s forwards;
    }

    &:active {
        border: 3px solid ${BACKGROUND_COLOR};
        transform: none;
    }

    @keyframes changeBackground {
        to {
            background: rgb(225, 225, 225, 0.9);
        }
    }
`;

export const SButtonLabel = styled.div`
    font-size: 14px;
    text-align: center;
    color: white;
`;
