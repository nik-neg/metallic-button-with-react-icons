import styled from 'styled-components';
import { getMetallicStyles } from '../styles/utils';
import { IconType } from 'react-icons';
import { MIN_WIDTH, MIN_HEIGHT } from './constants';
import { MetallicProps } from './types';

interface SMetallicButtonProps extends MetallicProps {
    width?: number;
    height?: number;
    icon?: IconType;
    $iconSize?: number;
    $iconColor?: string;
    $shineColor?: string;
    $shineDuration?: number;
    $shineDirection?: 'horizontal' | 'vertical';
}

export const SMetallicButton = styled.button<SMetallicButtonProps>`
    width: ${({ width }) => `${width ?? MIN_WIDTH}px`};
    height: ${({ height }) => `${height ?? MIN_HEIGHT}px`};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    transition: transform 0.2s ease;
    ${({ $shouldShine, width, $shineColor, $shineDuration, $shineDirection }) =>
        getMetallicStyles({
            $shouldShine,
            width: width ?? MIN_WIDTH,
            $shineColor,
            $shineDuration,
            $shineDirection,
        })}

    svg {
        width: ${({ $iconSize }) => $iconSize ?? 24}px;
        height: ${({ $iconSize }) => $iconSize ?? 24}px;
        fill: ${({ $iconColor }) => $iconColor ?? 'inherit'};
    }
`;

export const SStoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: #000000;
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const SIconSearchContainer = styled.div`
    max-width: 1200px;
    min-height: 100vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 468px) {
        gap: 1rem;
        width: 400px;
    }
`;

export const SControlsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 468px) {
        flex-direction: column;
        align-items: center;
        width: 400px;
    }
`;

export const SSeriesSelect = styled.select`
    max-width: 300px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #333;
    color: white;
    border: 1px solid #666;

    @media (max-width: 469px) {
    }
`;

export const SSearchInput = styled.input`
    max-width: 300px;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #333;
    color: white;
    border: 1px solid #666;

    @media (min-width: 469px) {
    }
`;

export const SIconGridContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: black;
`;

export const SNoResults = styled.div`
    color: white;
    text-align: center;
`;

export const SSeriesGroupContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const SSeriesTitle = styled.h3`
    color: white;
    border-bottom: 1px solid #666;
    padding-bottom: 0.5rem;
    position: sticky;
    top: 0;
    background-color: #000000;
    z-index: 1;
    margin-top: 2rem;

    &:first-child {
        margin-top: 0;
    }
`;

export const SIconsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    height: fit-content;

    @media (max-width: 768px) {
        padding: 0 2rem;
        gap: 0.5rem;
        justify-content: flex-start;
    }
`;
