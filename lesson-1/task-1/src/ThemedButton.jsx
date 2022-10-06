import React from 'react';
import { ThemeContext } from './themes-context.js';

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.toogleTheme}
        style={{
          background: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
        {...this.props}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;
