import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkTheme from './material-themes/darkTheme';
import TopMenuContainer from './TopMenuContainer';

function MainLayout(props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkTheme)}>
      <div>
        <header>
          <TopMenuContainer />
        </header>
        <main>
          {props.children}
        </main>
        <footer>© 2016 Green Team</footer>
      </div>
    </MuiThemeProvider>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
