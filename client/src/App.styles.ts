import styled from 'styled-components';

const BACKGROUND_COLOR = 'black';

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
        background: rgb(225, 225, 225); /* Background change on hover */
        //border: 3px solid black; /* Keep the same border color on click */
    }

    &:active {
        border: 3px solid ${BACKGROUND_COLOR}; /* Keep the same border color on click */
        transform: none; /* No scaling or transformation on click */
    }
`;

export const SButtonLabel = styled.div`
    font-size: 14px;
    text-align: center;
    color: white;
`;
