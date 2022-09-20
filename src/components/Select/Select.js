import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>
        {displayedValue}
        <Icon id="chevron-down" />
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  inline-size: fit-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentation = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding-inline: 16px;
  padding-block: 12px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover  + & {
    color: revert;
  }
`;

export default Select;
