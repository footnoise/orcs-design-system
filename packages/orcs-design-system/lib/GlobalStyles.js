import { createGlobalStyle } from "styled-components";
import { fonts, colors, fontSizes, fontWeights } from "./systemtheme";
// GLOBAL STYLES
// For browser reset, setting global box sizing and font sizing etc.

const GlobalStyles = createGlobalStyle`
/* apply a natural box layout model to all elements, but allowing components to change */
html {
    box-sizing: border-box;
    line-height: 1.15; /* 1 */
}
*, *:before, *:after {
    box-sizing: inherit;
}
html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
}
body {
    font-family: ${fonts.main};
    color: ${colors.greyDarkest};
}
/* set rem text size and styling */
html { font-size: 62.5%; }
body { font-size: 16px; font-size: 1.6rem; }
main {
  display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
}
section {
    height: calc(100vh - 60px);
    width: 100%;
	overflow-y: scroll;
}
img {
    border-style: none;
}
small {
    font-size: 80%;
}
p {
    margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: ${fontWeights[1]};
  font-family: ${fonts.main};
  margin: 0;
}
h1 {
  font-size: ${fontSizes[6]}px
}
h2 {
  font-size: ${fontSizes[5]}px
}
h3 {
  font-size: ${fontSizes[4]}px
}
h4 {
  font-size: ${fontSizes[3]}px
}
h5 {
  font-size: ${fontSizes[2]}px
}
h6 {
  font-size: ${fontSizes[1]}px
}
/* Animations */
@keyframes checkboxOn {
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px;
  }
  50% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px 2px 0 11px;
  }
  100% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px;
  }
}
@keyframes checkboxOff {
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }
  25% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }
  50% {
    transform: rotate(45deg);
    margin-top: -4px;
    margin-left: 6px;
    width: 0px;
    height: 0px;
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px,
      0 0 0 0 inset;
  }
  51% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 10px inset;
  }
  100% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 0px inset;
  }
}
@keyframes rippleOn {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
}
@keyframes rippleOff {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
}
@keyframes loadingSpin {
  to {
      transform: rotate(1turn);
  }
}
@keyframes expandWidth {
   0% { width: 0; }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
`;

export default GlobalStyles;
