/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHT = {
  'large': '24px',
  'medium': '12px',
  'small': '8px'
};

const PADDING = {
  'large': '4px'
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value} size={size}>
      <Bar value={value} size={size} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  padding: ${p => PADDING[p.size]};
  /* Truncates the edges of the inner progress bar */
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${p => p.value}%;
  height: ${p => HEIGHT[p.size]};
  background: ${COLORS.primary};
`

export default ProgressBar;
