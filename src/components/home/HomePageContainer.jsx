import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import * as homePageActions from '../../actions/homePageActions';

class HomePageContainer extends React.Component {

  componentDidMount() {
    // retrieve data
    this.props.actions.getHomePageInfo();
  }

  render() {
    return (
      <HomePage {...this.props.homePageInfo} locales={this.props.locales} />
    );
  }

}

HomePageContainer.propTypes = {
  homePageInfo: PropTypes.object.isRequired,
  locales: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    homePageInfo: state.homePageInfo,
    locales: state.locales.homePage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homePageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
