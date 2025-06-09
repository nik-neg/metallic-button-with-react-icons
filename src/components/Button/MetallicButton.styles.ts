import styled from "styled-components";
import { getMetallicStyles, MetallicProps } from "../styles/common.styles";
import { IconType } from "react-icons";

interface SMetallicButtonProps extends MetallicProps {
  width?: number;
  height?: number;
  icon?: IconType;
  iconSize?: number;
  iconColor?: string;
  shineColor?: string;
  shineSpeed?: number;
}

const MIN_WIDTH = 100;
const MIN_HEIGHT = 48;

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
  ${({ shouldShine, width, shineColor, shineSpeed }) =>
    getMetallicStyles({
      shouldShine,
      width: width ?? MIN_WIDTH,
      shineColor,
      shineSpeed,
    })}

  &:hover {
    transform: scale(1.5);
    z-index: 100;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: ${({ iconSize }) => iconSize ?? 24}px;
    height: ${({ iconSize }) => iconSize ?? 24}px;
    color: ${({ iconColor }) => iconColor ?? "inherit"};
  }
`;
