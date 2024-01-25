import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const MainContent = ({ children, ...props }: PropsWithChildren) => (
  <div {...props}>
    {children}
  </div>
)

const StyledMainContent = styled(MainContent)`
  position: absolute;
  top: 70px;
  left: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  &:empty {
    display: none;
  }
`;

export default StyledMainContent;
