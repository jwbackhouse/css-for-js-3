import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--border-width': '1px',
    '--font-size': `${14 / 16}rem`,
    '--icon-size': `${16 / 16}rem`,
    '--height': `${24 / 16}rem`,
  },
  large: {
    '--border-width': `2px`,
    '--font-size': `${18 / 16}rem`,
    '--icon-size': `${24 / 16}rem`,
    '--height': `${36 / 16}rem`,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={{...STYLES[size]}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{...STYLES[size]}}>
        <Icon id={icon} size={size} />
      </IconWrapper>
      <TextInput type="text" placeholder={placeholder} style={{'--width': `${width}px`, ...STYLES[size]}} />
    </Wrapper>
  );
};

// Use label rather than div because it's more semantic AND means clicking on the icon focuses the input1
const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  height: var(--icon-size);
  width: var(--icon-size);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;

`;

const TextInput = styled.input`
  width: var(--width);
  font-size: var(--font-size);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: inherit; // color doesn't automatically inherit to an input
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
