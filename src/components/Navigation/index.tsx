import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  {
    title: 'Layers',
    to: '/layers',
  },
  {
    title: 'About',
    to: '/about',
  },
];

interface IProps {

}

const Navigation = (props: IProps) => {  
  const { pathname } = useLocation();

  return (
    <ButtonGroup
      {...props}
      size='large'
      variant='contained'
    >
      {
        menuItems.map(item => (
          <Button
            key={item.to}
            to={pathname === item.to ? '/' : item.to}
            component={Link}
            color={pathname === item.to ? 'secondary' : undefined}
          >
            {item.title}
          </Button>
        ))
      }
    </ButtonGroup>
  );
};

const StyledNavigation = styled(Navigation)`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export default StyledNavigation;
