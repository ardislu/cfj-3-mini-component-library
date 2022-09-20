import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHT = {
  'small': '24px',
  'large': '36px'
}

const BORDER_BLOCK_END = {
  'small': `1px solid ${COLORS.black}`,
  'large': `2px solid ${COLORS.black}`
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper label={label} width={width} size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} />
      <NativeInput placeholder={placeholder} />
    </Wrapper>
  );
};

const NativeInput = styled.input`
  border: none;
  outline: none;
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const Wrapper = styled.label`
  display: flex;
  gap: 11px;
  width: ${p => p.width}px;
  height ${p => HEIGHT[p.size]};
  color: ${COLORS.gray700};
  border-block-end: ${p => BORDER_BLOCK_END[p.size]};

  &:has(${NativeInput}:focus) {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

export default IconInput;
