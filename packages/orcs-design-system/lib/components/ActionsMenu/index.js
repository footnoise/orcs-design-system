import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { space, layout } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const Wrapper = styled.div`
  ${space}
  ${layout}
  position: relative;
  width: auto;
`;

const Control = styled.button`
  position: relative;
  background-color: ${themeGet("colors.greyLighter")};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  text-decoration: none;
  text-align: center;
  border-radius: ${themeGet("radii.2")};
  transition: ${themeGet("transition.transitionDefault")};
  cursor: pointer;
  width: 30px;
  height: 30px;
  &:hover,
  &:focus {
    outline: 0;
    background-color: ${themeGet("colors.greyLight")};
  }
`;

const Icon = styled.div`
  border-radius: 2px;
  height: 4px;
  width: 4px;
  background-color: ${themeGet("colors.greyDarker")};
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 2px;
    height: 4px;
    width: 4px;
    background-color: ${themeGet("colors.greyDarker")};
    transition: ${themeGet("transition.transitionDefault")};
    transform-origin: 50% 50%;
  }
  &:before {
    transform: translate(0, -6px) scaleX(1);
  }
  &:after {
    transform: translate(0, 6px) scaleX(1);
  }
  ${props =>
    props.isOpen
      ? css`
          &:before {
            animation: 400ms crossTransform1 ease-in-out forwards;
          }
          &:after {
            animation: 400ms crossTransform2 ease-in-out forwards;
          }
        `
      : css``};
`;

const Menu = styled.div`
  display: inline-block;
  position: absolute;
  left: 34px;
  top: 0;
  width: auto;
  z-index: 5;
  background-color: ${themeGet("colors.greyDarker")};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: ${themeGet("radii.2")};
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  transform-origin: top left;
  transition: all 300ms;
  transition-timing-function: cubic-bezier(0, 1.4, 1, 1);
  ${props =>
    props.isOpen
      ? css`
          transform: scale(1);
          opacity: 1;
          pointer-events: auto;
        `
      : css``};
  a,
  button {
    display: block;
    padding: ${themeGet("space.3")};
    appearance: none;
    background-color: transparent;
    border: none;
    color: ${themeGet("colors.white")};
    font-size: ${themeGet("fontSizes.1")};
    font-weight: ${themeGet("fontWeights.2")};
    text-decoration: none;
    border-bottom: solid 1px ${themeGet("colors.greyDarkest")};
    transition: ${themeGet("transition.transitionDefault")};
    &:hover,
    &:focus {
      outline: 0;
      background-color: ${themeGet("colors.primaryDark")};
    }
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const ActionsMenu = ({ children, isOpen, ...props }) => {
  const [baseState, setBase] = useState(isOpen);
  const [toggleState, setToggle] = useState(false);

  const onToggle = () => {
    if (!toggleState) setToggle(true);
    else setToggle(false);
    if (!baseState) setBase(true);
    else setBase(false);
  };
  return (
    <Wrapper {...props}>
      <Control onClick={onToggle}>
        <Icon isOpen={baseState} />
      </Control>
      <Menu isOpen={baseState}>{children}</Menu>
    </Wrapper>
  );
};

ActionsMenu.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default ActionsMenu;