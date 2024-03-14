import React from "react";
import styled from "@emotion/styled";
import { Link, NavbarItem } from "@nextui-org/react";

const StyledLink = styled(Link)`
  padding: 0.25rem 0.5rem;
  border: 2px solid transparent;
  /* box-shadow: 8px 8px 2px ; */

  :hover {
    border: 2px solid rgba(57, 203, 203, 0.81);
    box-shadow: 8px 8px 2px rgba(57, 203, 203, 0.81);
  }
`;
type Props = {
  displayText: string;
  href: string;
};

const StyledNavLink = ({ displayText, href }: Props) => {
  return (
    <NavbarItem>
      <StyledLink color="foreground" href={href}>
        {displayText}
      </StyledLink>
    </NavbarItem>
  );
};

export default StyledNavLink;
