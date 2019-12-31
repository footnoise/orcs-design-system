import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import colours from "../../colours";
import variables from "../../variables";
import { rgba } from "polished";

const Item = styled.div`
  position: relative;
  font-size: 1.4rem;
  position: relative;
  padding: 10px 12px;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${colours.white};
  border-radius: ${variables.borderRadiusSmall};
  background: ${props =>
    props.colour && colours[props.colour]
      ? rgba(colours[`${props.colour}Dark`], 0.9)
      : rgba(colours.primaryDark, 0.9)};

  ${props =>
    props.floating
      ? css`
          z-index: 100;
          position: fixed;
        `
      : css``};

  top: ${props => (props.top ? props.top : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  left: ${props => (props.left ? props.left : "auto")};

  ${props =>
    props.centered
      ? css`
          left: 50%;
          transform: translateX(-50%);
          right: auto;
        `
      : css``};

  span {
    margin-right: 12px;
  }
  svg:first-of-type {
    margin-right: 12px;
  }
  svg.close-button {
    margin-left: auto;
    cursor: pointer;
    opacity: 0.6;
    transition: ${variables.defaultTransition};
    &:hover,
    &:focus {
      outline: 0;
      opacity: 1;
    }
  }
`;

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dismissed: false };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({
      dismissed: true
    });

    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    const {
      icon,
      colour,
      floating,
      children,
      top,
      right,
      bottom,
      left,
      centered,
      closable = true
    } = this.props;
    const { dismissed } = this.state;
    return (
      !dismissed && (
        <Item
          colour={colour}
          floating={floating}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          centered={centered}
        >
          {icon && <Icon icon={icon} color="white" />}
          <span>{children}</span>
          {closable && (
            <Icon
              className="close-button"
              icon={["fas", "times"]}
              color="white"
              tabIndex="0"
              onClick={this.handleDismiss}
            />
          )}
        </Item>
      )
    );
  }
}

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Applies an icon to notification with specified name. */
  icon: PropTypes.array,
  /** Specifies notification colour */
  colour: PropTypes.oneOf(["success", "warning", "danger", "primary"]),
  /** Positions notification floating over content, instead of inline. Must be combined with top, right, bottom, left or centered props to correctly position in your desired location */
  floating: PropTypes.bool,
  /** Specifies the position of a floating notification from top of browser window (units must be specified) */
  top: PropTypes.string,
  /** Specifies the position of a floating notification from right of browser window (units must be specified) */
  right: PropTypes.string,
  /** Specifies the position of a floating notification from bottom of browser window (units must be specified) */
  bottom: PropTypes.string,
  /** Specifies the position of a floating notification from left of browser window (units must be specified) */
  left: PropTypes.string,
  /** Horizontally centers a floating notification. If you use this, you don't need to specify left or right props, only top or bottom depending on if you want the notification to sit at the top or bottom of the screen */
  centered: PropTypes.bool,
  /** A callback function for the dismiss operation.*/
  onDismiss: PropTypes.func,
  /** Showing the close button, default to true.*/
  closable: PropTypes.bool
};

/** @component */
export default Notification;