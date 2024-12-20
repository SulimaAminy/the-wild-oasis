import React from 'react'
import styled from 'styled-components'
import HeaderMenu from './HeaderMenu';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  padding: 1.2rem 4.8rem;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
       <HeaderMenu  />
    </StyledHeader>
  )
}

export default Header
