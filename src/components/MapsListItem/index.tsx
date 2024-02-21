import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface IProps {
  name: string;
  description: string;
  onClick?: MouseEventHandler;
}

const MapsListItem = ({ name, description, onClick }: IProps) => (
  <div onClick={onClick} data-name={name}>
    {description}
  </div>
)

const StyledMapListItem = styled(MapsListItem)`
  
`;

export default StyledMapListItem;
