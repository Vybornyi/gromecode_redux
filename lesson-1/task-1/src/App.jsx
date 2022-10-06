import React from 'react';
import ThemedButton from './ThemedButton';
import './index.scss';
import { themes, ThemeContext } from './themes-context';

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toogleTheme = () => {
    const newTheme = this.state.theme === themes.light ? themes.dark : themes.light;
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton toogleTheme={this.toogleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton toogleTheme={this.toogleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
