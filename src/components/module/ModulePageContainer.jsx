import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModulePage from './ModulePage';
import * as moduleActions from '../../actions/moduleActions';

class ModulePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    // retrieve data
    this.props.actions.getModuleItem(parseInt(this.props.params.id, 10));
  }

  submit() {
    // this.props.moduleActions.submit({});
  }

  render() {
    return (
      <ModulePage
        unit={this.props.currentUnit}
        module={this.props.currentModule}
        locales={this.props.locales}
        onSubmit={this.submit}
        palette={this.context.muiTheme.palette} // For example
      />
    );
  }

}

ModulePageContainer.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

ModulePageContainer.propTypes = {
  currentUnit: PropTypes.object.isRequired,
  currentModule: PropTypes.object.isRequired,
  locales: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const currentUnit = state.currentModule.units.find((item) => (
    item.id === state.currentModule.currentUnitId ||
      state.currentModule.currentUnitId === 0
  ));

  return {
    currentUnit,
    currentModule: state.currentModule,
    locales: state.locales.unitPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moduleActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulePageContainer);
