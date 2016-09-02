import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

function LanguageSelector({ currentLang, langs, onChange }) {
  const items = [];
  langs.forEach((item, index) => {
    items.push(
      <MenuItem key={index} value={item.value} primaryText={item.name} />
    );
  });
  return (
    <DropDownMenu value={currentLang} onChange={onChange} underlineStyle={{ display: 'none' }}>
      {items}
    </DropDownMenu>
  );
}

LanguageSelector.propTypes = {
  currentLang: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguageSelector;
