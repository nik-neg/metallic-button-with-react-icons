import { keyframes, css } from 'styled-components';
import { BASE_DURATION_SHINE_VERTICAL, MetallicProps } from '../Button';
import {
    HORIZONTAL_COEFFICIENT,
    MIN_WIDTH,
    BASE_WIDTH_SHINE,
    BASE_DURATION_SHINE,
    BASE_COEFFICIENT,
    HORIZONTAL_OFFSET,
} from '../Button';

const createHorizontalSlideKeyframes = (from: number, to: number) => keyframes`
    0% {
        transform: translateX(-${from}%);
    }
    100% {
        transform: translateX(${to}%);
    }
`;

const createVerticalSlideKeyframes = () => keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(200%);
    }
`;

const GREY_COLOR_WITH_OPACITY = 'rgba(111, 111, 111, 0.9402135854341737)';

interface MetallicBaseProps {
    $shineColor?: string;
}

export const getMetallicBase = ({ $shineColor }: MetallicBaseProps) => css`
    background: linear-gradient(90deg, ${$shineColor} 0%, ${$shineColor} 35%, ${$shineColor} 52%, ${$shineColor} 94%);
    border: 3px solid rgba(111, 111, 111, 1);
    border-color: ${GREY_COLOR_WITH_OPACITY} rgba(35, 35, 35, 1) rgba(35, 35, 35, 1) ${GREY_COLOR_WITH_OPACITY};
    transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
`;

export const shineEffect = ({
    width = MIN_WIDTH,
    $shineColor = 'rgba(255, 255, 255, 0.8)',
    $shineDuration = BASE_DURATION_SHINE,
    $shineDirection = 'horizontal',
}: MetallicProps) => {
    const isVertical = $shineDirection === 'vertical';

    const isWidthBiggerThanBaseCoefficient = width / MIN_WIDTH > BASE_COEFFICIENT;

    const from = HORIZONTAL_OFFSET * (isWidthBiggerThanBaseCoefficient ? width / MIN_WIDTH : BASE_COEFFICIENT);

    const to = width + (width / MIN_WIDTH - HORIZONTAL_COEFFICIENT) * MIN_WIDTH;

    const animation = isVertical ? createVerticalSlideKeyframes() : createHorizontalSlideKeyframes(from, to);

    const gradientDirection = isVertical ? 'to bottom' : 'to right';

    const dynamicShineDuration = $shineDuration ?? (isVertical ? BASE_DURATION_SHINE_VERTICAL : BASE_DURATION_SHINE);

    return css`
        background: linear-gradient(
            ${gradientDirection},
            rgba(255, 255, 255, 0) 0%,
            ${$shineColor} 50%,
            rgba(128, 186, 232, 0) 99%,
            rgba(125, 185, 232, 0) 94%
        );
        &:hover {
            &:after {
                content: '';
                top: 0;
                left: 0;
                width: ${isVertical ? '100%' : `${BASE_WIDTH_SHINE}px`};
                height: ${isVertical ? '50%' : '100%'};
                position: absolute;
                z-index: 1;
                animation: ${animation} ${dynamicShineDuration}s ease-in-out infinite alternate;
                background: linear-gradient(
                    ${gradientDirection},
                    rgba(255, 255, 255, 0) 0%,
                    ${$shineColor} 50%,
                    rgba(128, 186, 232, 0) 99%,
                    rgba(125, 185, 232, 0) 94%
                );
            }
        }
    `;
};

export const getMetallicStyles = ({
    $shouldShine = false,
    width,
    height,
    $shineColor,
    $shineDuration,
    $shineDirection,
}: MetallicProps = {}) => css`
    ${getMetallicBase({ $shineColor })}
    ${$shouldShine ? shineEffect({ width, height, $shineColor, $shineDuration, $shineDirection }) : ''}
`;
