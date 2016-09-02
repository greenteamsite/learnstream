import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LogoSvgIcon from 'material-ui/svg-icons/hardware/memory';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { lightWhite } from 'material-ui/styles/colors';
import UserInfoShort from './UserInfoShort';
import LanguageSelector from './LanguageSelector';

function TopMenuComponent(props) {
  const currentLang = props.userProfile.lang ? props.userProfile.lang : props.settings.defaultLang;
  return (
    <Toolbar className="topmenu-component">
      <ToolbarGroup firstChild>
        <Link to="/" activeClassName="active">
          <LogoSvgIcon color={lightWhite} style={{ height: '48px', width: '48px', padding: '5px' }} />
        </Link>
        <ToolbarTitle text="The green coding" style={{ color: lightWhite }} />
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <LanguageSelector
          currentLang={currentLang}
          langs={props.settings.supportedLangs}
          onChange={props.onChangeLang}
        />
        <UserInfoShort userName={props.userProfile.nickname} />
      </ToolbarGroup>
    </Toolbar>
  );
}

TopMenuComponent.propTypes = {
  userProfile: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  onChangeLang: PropTypes.func.isRequired,
};

export default TopMenuComponent;
