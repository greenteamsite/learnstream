import React, { PropTypes } from 'react';

import { List, ListItem } from 'material-ui/List';
import ToggleCheckBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckBoxBlankIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import Subheader from 'material-ui/Subheader';
import LabelOutlineIcon from 'material-ui/svg-icons/action/label-outline';
import LabelIcon from 'material-ui/svg-icons/action/label';
import ActionAssignmentIcon from 'material-ui/svg-icons/action/assignment';

function ModuleProgressIndicator(props) {
  const listItems = [];
  props.items.forEach((item, index) => {
    listItems.push(
      <ListItem
        key={index}
        leftIcon={item.isActive ? <LabelOutlineIcon /> : <LabelIcon />}
        rightIcon={item.isCompleted ? <ToggleCheckBoxIcon /> : <ToggleCheckBoxBlankIcon />}
        primaryText={item.title}
        secondaryText={item.subtitle}
      />
    );
  });

  listItems.push(
    <ListItem
      key="testSummary"
      leftIcon={<ActionAssignmentIcon />}
      rightIcon={<ToggleCheckBoxBlankIcon />}
      primaryText="Summary Test"
    />
  );

  return (
    <List style={{ minWidth: '20em' }}>
      <Subheader inset>{props.title}</Subheader>
      {listItems}
    </List>
  );
}

const item = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
};

ModuleProgressIndicator.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(item),
};

export default ModuleProgressIndicator;
