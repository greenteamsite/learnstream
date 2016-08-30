import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserProfilePage from './UserProfilePage';
import * as userProfileActions from '../../actions/userProfileActions';

class UserProfilePageContainer extends React.Component {

  componentDidMount() {
    const login = this.props.params.login;
    this.props.actions.getUserProfile(login);
  }

  render() {
    return (
      <UserProfilePage {...this.props.userProfile} locales={this.props.locales} />
    );
  }

}

UserProfilePageContainer.propTypes = {
  params: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
  locales: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userProfile: state.userProfile,
    locales: state.locales.userProfilePage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userProfileActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePageContainer);
