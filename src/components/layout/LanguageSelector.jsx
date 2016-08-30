import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

function LanguageSelector({ currentLang, langs, onChange }) {
  let items = [];
  langs.forEach((item) => {
    items.push(
      <MenuItem value={item.value} primaryText={item.name} />
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
