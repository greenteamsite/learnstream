import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModulePage from './ModulePage';
import * as unitActions from '../../actions/unitActions';
import * as moduleActions from '../../actions/moduleActions';

class ModulePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    // retrieve data
    this.props.moduleActions.getModuleItem(this.props.params.id);
    // this.props.unitActions.getUnitPage(this.props.params.id);
  }

  submit() {
    this.props.unitActions.submit({});
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
  unitActions: PropTypes.object.isRequired,
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
    unitActions: bindActionCreators(unitActions, dispatch),
    moduleActions: bindActionCreators(moduleActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulePageContainer);
