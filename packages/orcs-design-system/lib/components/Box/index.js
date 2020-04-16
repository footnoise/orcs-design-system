import React from "react";
import styled from "styled-components";
import { space, layout, color, border, variant } from "styled-system";
import PropTypes from "prop-types";
import { themeGet } from "@styled-system/theme-get";

const BoxWrapper = styled.div`
${space}
${layout}
${color}
${border}
  box-sizing: border-box;
  ${variant({
    variants: {
      borderbox: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "greyLighter"
      },
      shadowbox: {
        boxShadow: `0 1px 2px 0 ${themeGet("colors.black10")}`
      },
      bordershadowbox: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "greyLighter",
        boxShadow: `0 1px 2px 0 ${themeGet("colors.black10")}`
      }
    }
  })}
  `;

export default function Box({ children, ...props }) {
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
}

Box.propTypes = {
  /** Children of `Box` are taken as node elements */
  children: PropTypes.node,
  /** Sets `Box` display mode */
  display: PropTypes.oneOf([
    "inline",
    "block",
    "contents",
    "inline-block",
    "none",
    "initial",
    "inherit"
  ]),
  /** Sets behaviour of elements in `Box` that are larger than their container. */
  overflow: PropTypes.oneOf(["visible", "hidden", "scroll", "auto"]),
  /** Sets the border in one declaration: `border-width` `border-style` `border-color` */
  border: PropTypes.string,
  /** Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`. */
  padding: PropTypes.number,
  /** Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`. */
  margin: PropTypes.number,
  /** Sets the background colour of the box. */
  bg: PropTypes.string,
  /** Sets the width of the box. */
  width: PropTypes.string
};

Box.defaultProps = {
  width: "100%",
  display: "block",
  overflow: "visible",
  border: "none",
  m: 0,
  p: 4,
  bg: "transparent"
};
