import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UnitPage from './UnitPage';
import * as unitPageActions from '../../actions/unitPageActions';
import * as moduleActions from '../../actions/moduleActions';

class UnitPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    // retrieve data
    this.props.moduleActions.getModuleItem(1);
    this.props.actions.getUnitPage(this.props.params.id);
  }

  submit() {
    this.props.actions.submit({});
  }

  render() {
    return (
      <UnitPage
        unit={this.props.currentUnit}
        module={this.props.currentModule}
        locales={this.props.locales}
        onSubmit={this.submit}
        palette={this.context.muiTheme.palette} // For example
      />
    );
  }

}

UnitPageContainer.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

UnitPageContainer.propTypes = {
  currentUnit: PropTypes.object.isRequired,
  currentModule: PropTypes.object.isRequired,
  locales: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  moduleActions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    currentUnit: state.currentUnit,
    currentModule: state.currentModule,
    locales: state.locales.unitPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(unitPageActions, dispatch),
    moduleActions: bindActionCreators(moduleActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitPageContainer);
