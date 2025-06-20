import { keyframes, css } from 'styled-components';

export interface MetallicProps {
    shouldShine?: boolean;
    width?: number;
    shineColor?: string;
    shineSpeed?: number;
}

const createSlideKeyframes = (width: number = 100) => keyframes`
    0% {
        transform: translateX(-80%);
    }
    100% {
        transform: translateX(${width}%);
    }
`;

const BASE_DURATION = 1.4;

const GREY_COLOR_WITH_OPACITY = 'rgba(111, 111, 111, 0.9402135854341737)';

export const metallicBase = css`
    background: rgb(240, 240, 240);
    background: linear-gradient(
        90deg,
        rgba(240, 240, 240, 1) 0%,
        rgba(111, 111, 111, 1) 35%,
        ${GREY_COLOR_WITH_OPACITY} 52%,
        ${GREY_COLOR_WITH_OPACITY} 94%
    );
    border: 3px solid rgba(111, 111, 111, 1);
    border-color: ${GREY_COLOR_WITH_OPACITY} rgba(35, 35, 35, 1) rgba(35, 35, 35, 1) ${GREY_COLOR_WITH_OPACITY};
    transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
`;

export const shineEffect = ({
    width,
    shineColor = 'rgba(255, 255, 255, 0.8)',
    shineSpeed = BASE_DURATION,
}: MetallicProps) => css`
    &:hover {
        &:after {
            content: '';
            top: 0;
            width: 50px;
            height: 100%;
            position: absolute;
            z-index: 1;
            animation: ${createSlideKeyframes(width)} ${shineSpeed}s ease-in-out infinite alternate;
            background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                ${shineColor} 50%,
                rgba(128, 186, 232, 0) 99%,
                rgba(125, 185, 232, 0) 94%
            );
        }
    }
`;

export const getMetallicStyles = ({ shouldShine = false, width, shineColor, shineSpeed }: MetallicProps = {}) => css`
    ${metallicBase}
    ${shouldShine ? shineEffect({ width, shineColor, shineSpeed }) : ''}
`;
