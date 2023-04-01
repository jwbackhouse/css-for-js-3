/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let height = "0.75rem";
  if (size === "large") {
    height = "1.5rem";
  } else if (size === "small") {
    height = "0.5rem";
  }

  let borderRadius = size === "large" ? '8px' : '4px';

  let rightBorderRadius = value > 98 ? ((value - 98) / 2) * 4 + "px" : 0;

  return (
    <>
      <VisuallyHidden>
        <label htmlFor="progress">{value}%</label>
      </VisuallyHidden>
      <Progress
        id="progress"
        max={100}
        value={value}
        size={size}
        style={{
          "--height": height,
          "--border-radius": borderRadius,
          "--right-border-radius": rightBorderRadius,
        }}
        aria-valuenow={value}
      />
    </>
  );
};

const Progress = styled.progress`
  height: var(--height);
  width: calc(370 / 16 * 1rem);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--border-radius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${(props) => (props.size === "large" ? "4px" : 0)};
    overflow: hidden;
  }

  &::-webkit-progress-value,
  -moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
  }
`;

export default ProgressBar;
