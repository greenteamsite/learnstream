import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardPage from './DashboardPage';
import * as dashboardPageActions from '../../actions/dashboardPageActions';

class DashboardPageContainer extends React.Component {

  componentDidMount() {
    // retrieve data
    this.props.actions.getDashboardPageInfo(this.props.userProfile.lang);
  }

  render() {
    return (
      <DashboardPage
        currentModule={this.props.currentModule}
        currentUnit={this.props.currentUnit}
        isStart={this.props.isStart}
        locales={this.props.locales}
        linkToStart={'/module/1/'}
      />
    );
  }

}

DashboardPageContainer.propTypes = {
  currentModule: PropTypes.object.isRequired,
  currentUnit: PropTypes.object.isRequired,
  isStart: PropTypes.bool.isRequired,
  locales: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const currentUnit = state.currentModule.units.find((item) => (
    item.id === state.currentModule.currentUnitIndex ||
      state.currentModule.currentUnitIndex === 0
  ));

  const isStart = currentUnit.id === state.currentModule.units[0].id;

  return {
    currentModule: state.currentModule,
    currentUnit,
    isStart,
    locales: state.locales.dashboardPage,
    userProfile: state.userProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardPageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPageContainer);
