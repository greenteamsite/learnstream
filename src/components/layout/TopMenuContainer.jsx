import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopMenu from './TopMenu';
import * as userProfileActions from '../../actions/userProfileActions';

class TopMenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.changeLang = this.changeLang.bind(this);
  }
  componentDidMount() {
    // to be continued...
  }

  changeLang(event, key, payload) {
    this.props.actions.changeLang(payload);
  }

  render() {
    return (
      <TopMenu {...this.props} onChangeLang={this.changeLang} />
    );
  }

}

TopMenuContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userProfile: state.userProfile,
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userProfileActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenuContainer);
