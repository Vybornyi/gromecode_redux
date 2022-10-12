import React from 'react';
import Header from './Header';
import './index.scss';
import { userData, UserContext } from './user-context';

class App extends React.Component {
  state = {
    userData,
  };

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
