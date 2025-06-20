import { keyframes, css } from 'styled-components';
import { MetallicProps } from '../Button';
import {
    HORIZONTAL_COEFFICIENT,
    MIN_WIDTH,
    BASE_WIDTH_SHINE,
    BASE_DURATION_SHINE,
    BASE_COEFFICIENT,
    HORIZONTAL_OFFSET,
} from '../Button';

const createHorizontalSlideKeyframes = (width: number = 100) => keyframes`
    0% {
        transform: translateX(-${
            HORIZONTAL_OFFSET * (width / MIN_WIDTH > BASE_COEFFICIENT ? width / MIN_WIDTH : BASE_COEFFICIENT)
        }%);
    }
    100% {
        transform: translateX(${width + (width / MIN_WIDTH - HORIZONTAL_COEFFICIENT) * MIN_WIDTH}%);
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
    $isVertical?: boolean;
}

export const getMetallicBase = ({ $isVertical }: MetallicBaseProps) => css`
    background: ${$isVertical
        ? GREY_COLOR_WITH_OPACITY
        : `linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(111, 111, 111, 1) 35%, ${GREY_COLOR_WITH_OPACITY} 52%, ${GREY_COLOR_WITH_OPACITY} 94%)`};

    border: 3px solid rgba(111, 111, 111, 1);
    border-color: ${GREY_COLOR_WITH_OPACITY} rgba(35, 35, 35, 1) rgba(35, 35, 35, 1) ${GREY_COLOR_WITH_OPACITY};
    transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
`;

export const shineEffect = ({
    width,
    $shineColor = 'rgba(255, 255, 255, 0.8)',
    $shineSpeed = BASE_DURATION_SHINE,
    $shineDirection = 'horizontal',
}: MetallicProps) => {
    const isVertical = $shineDirection === 'vertical';

    const animation = isVertical ? createVerticalSlideKeyframes() : createHorizontalSlideKeyframes(width);

    const gradientDirection = isVertical ? 'to bottom' : 'to right';

    return css`
        &:hover {
            &:after {
                content: '';
                top: 0;
                left: 0;
                width: ${isVertical ? '100%' : `${BASE_WIDTH_SHINE}px`};
                height: ${isVertical ? '50%' : '100%'};
                position: absolute;
                z-index: 1;
                animation: ${animation} ${$shineSpeed}s ease-in-out infinite alternate;
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
    $shineSpeed,
    $shineDirection,
}: MetallicProps = {}) => css`
    ${getMetallicBase({ $isVertical: $shineDirection === 'vertical' })}
    ${$shouldShine ? shineEffect({ width, height, $shineColor, $shineSpeed, $shineDirection }) : ''}
`;
