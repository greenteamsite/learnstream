/* eslint-disable global-require*/
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import LoginIcon from 'material-ui/svg-icons/action/account-box';

function UserInfoShortComponent({ userName }) {
  if (userName) {
    let avatarUrl = '';
    try {
      avatarUrl = require(`../../images/users/${userName.toLowerCase()}.gif`);
    } catch (e0) {
      try {
        avatarUrl = require('../../images/users/avatar-empty.svg');
      } catch (e1) {
        avatarUrl = '';
      }
    }
    return (
      <div>
        <FlatButton
          label={userName}
          containerElement={<Link to={`/profile/${userName}`} />}
          primary
          style={{ height: 56, padding: 8 }}
          icon={<Avatar
            src={avatarUrl}
            size={40}
          />}
        />
      </div>
    );
  }

  return (
    <div>
      <FlatButton
        label="Login"
        href="/login"
        primary
        style={{ height: 56, padding: 10 }}
        icon={<LoginIcon />}
      />
    </div>
  );
}

UserInfoShortComponent.propTypes = {
  userName: PropTypes.string,
};

export default UserInfoShortComponent;
