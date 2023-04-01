import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import { COLORS } from '../../constants';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PretendSelect>{displayedValue}</PretendSelect>
      <IconWrapper> 
        <Icon id='chevron-down' size={24} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: fit-content;
  position: relative;
  font-size: 1rem;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  border: none;
  background-color: transparent;
  opacity: 0;
  padding: 12px 52px 12px 16px;
  font-size: 1rem;
  width: 100%;
  position: absolute;
  appearance: none;
`;
  
const PretendSelect = styled.div`
  padding: 12px 52px 12px 16px;

  ${NativeSelect}:focus + & {
    !1outline: 5px dotted #212121; // fallback for other browsers
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  pointer-events: none; // nicer alternative to using z-index
`;

export default Select;
