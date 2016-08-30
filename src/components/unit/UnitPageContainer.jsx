import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UnitPage from './UnitPage';
import * as unitPageActions from '../../actions/unitPageActions';

class UnitPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    // retrieve data
    this.props.actions.getUnitPage(this.props.params.id);
  }

  submit() {
    this.props.actions.submit({});
  }

  render() {
    return (
      <UnitPage
        unit={this.props.currentUnit}
        locales={this.props.locales}
        onSubmit={this.submit}
      />
    );
  }

}

UnitPageContainer.propTypes = {
  currentUnit: PropTypes.object.isRequired,
  locales: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    currentUnit: state.currentUnit,
    locales: state.locales.unitPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(unitPageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitPageContainer);
