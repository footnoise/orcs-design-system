import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { space, layout, color, compose, variant } from "styled-system";
import { css } from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import systemtheme from "../../systemtheme";

const BadgeStyles = compose(space, layout, color);

const Item = styled("span")
  .withConfig({ shouldForwardProp })
  .attrs(props => ({
    "data-testid": props["data-testid"] ? props["data-testid"] : null
  }))(
  css({
    fontSize: 0,
    fontWeight: 2,
    display: "inline-block",
    position: "relative",
    py: 2,
    px: 3,
    cursor: "default",
    borderRadius: 1,
    color: "greyDarkest",
    bg: "greyLighter"
  }),
  variant({
    variants: {
      default: {},
      success: {
        color: "successDarkest",
        bg: "successLighter"
      },
      warning: {
        color: "warningDarkest",
        bg: "warningLighter"
      },
      danger: {
        color: "dangerDarkest",
        bg: "dangerLightest"
      },
      primaryLight: {
        color: "primaryDarker",
        bg: "primaryLightest"
      },
      primary: {
        color: "primaryDarkest",
        bg: "primaryLighter"
      },
      primaryDark: {
        color: "primaryDarkest",
        bg: "primaryLight"
      },
      secondary: {
        color: "secondaryDarker",
        bg: "secondaryLightest"
      }
    }
  }),
  BadgeStyles
);

export default function Badge({ children, theme, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Item {...props}>{children}</Item>
    </ThemeProvider>
  );
}

Badge.propTypes = {
  /** Specifies badge colour. Colours are taken from the standard design system colours. */
  variant: PropTypes.oneOf([
    "success",
    "warning",
    "danger",
    "primaryLight",
    "primary",
    "primaryDark",
    "secondary"
  ]),
  /** The label text on the badge is passed as a child element. */
  children: PropTypes.node,
  /** Specifies the system theme. */
  theme: PropTypes.object
};

Badge.defaultProps = {
  theme: systemtheme
};
