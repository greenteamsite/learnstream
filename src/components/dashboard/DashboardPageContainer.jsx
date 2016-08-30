import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardPage from './DashboardPage';
import * as dashboardPageActions from '../../actions/dashboardPageActions';

class DashboardPageContainer extends React.Component {

  componentDidMount() {
    // retrieve data
    this.props.actions.getDashboardPageInfo();
  }

  render() {
    return (
      <DashboardPage
        {...this.props.dashboardPageInfo}
        locales={this.props.locales}
        linkToStart={'/unit/1/'}
      />
    );
  }

}

DashboardPageContainer.propTypes = {
  dashboardPageInfo: PropTypes.object.isRequired,
  locales: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    dashboardPageInfo: state.dashboardPageInfo,
    locales: state.locales.dashboardPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardPageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPageContainer);
