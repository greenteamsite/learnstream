import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkTheme from './material-themes/darkTheme';
import TopMenuContainer from './TopMenuContainer';

class MainLayout extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(darkTheme) };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkTheme)}>
        <div>
          <header>
            <TopMenuContainer />
          </header>
          <main>
            {this.props.children}
          </main>
          <footer>© 2016 Green Team</footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

MainLayout.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
