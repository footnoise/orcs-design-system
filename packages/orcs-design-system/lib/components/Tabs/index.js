import styled, { css } from "styled-components";
import * as systemtheme from "../../systemtheme";
import { Link } from "react-router-dom";
import { space, layout } from "styled-system";

export const TabsContainer = styled.div`
  ${space}
  ${layout}
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
`;

export const Tab = styled(Link)`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  position: relative;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  padding: ${systemtheme.space[3]}px ${systemtheme.space[4]}px;
  border-radius: ${systemtheme.radii[2]}px ${systemtheme.radii[2]}px 0 0;
  transition: ${systemtheme.transition};
  cursor: ${props => (props.active ? "default" : "pointer")};
  background: ${props =>
    props.active
      ? systemtheme.colors.greyDark
      : systemtheme.colors.greyLighter};
  color: ${props =>
    props.active ? systemtheme.colors.white : systemtheme.colors.grey};
  + a {
    margin-left: ${systemtheme.space[2]}px;
  }
  &:focus {
    outline: 0;
  }
  ${props => !props.active && inactiveStyle}
  ${props => props.notification && notificationStyle(props.notification)}
`;

const inactiveStyle = css`
  &:hover,
  &:focus {
    color: ${systemtheme.colors.greyDarker};
    background: ${systemtheme.colors.greyLighter};
  }
`;

const notificationStyle = notification => css`
  :after {
    content: "${notification}";
    position: absolute;
    top: -8px;
    right: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: ${systemtheme.space[5]}px;
    height: ${systemtheme.space[5]}px;
    border-radius: 100%;
    font-size: ${systemtheme.fontSizes[0]};
    font-weight: ${systemtheme.fontWeights[2]};
    color: ${systemtheme.colors.white};
    background-color: ${systemtheme.colors.danger};
  }
`;

export default { Tab, TabsContainer };
