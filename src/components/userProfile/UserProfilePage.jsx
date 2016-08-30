import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

function UserProfilePage(props) {
  const baseClass = 'userprofile-page';
  return (
    <DocumentTitle title={props.locales.title}>
      <div className={baseClass}>
        {props.nickname}
      </div>
    </DocumentTitle>
  );
}

UserProfilePage.propTypes = {
  nickname: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  roles: PropTypes.array.isRequired,
  locales: PropTypes.object.isRequired,
};

export default UserProfilePage;
