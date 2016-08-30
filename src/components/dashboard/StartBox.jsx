import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

function StartBox(props) {
  return (
    <Card initiallyExpanded>
      <CardHeader
        title={props.title}
        subtitle={props.subtitle}
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        {props.cardText}
        <h4>{props.cardHeader}</h4>
        {props.cardDescription}
      </CardText>
      <CardActions expandable={false}>
        <RaisedButton
          label={props.btnLabel}
          containerElement={<Link to={props.linkToStart} />}
        />
      </CardActions>
    </Card>
  );
}

StartBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cardText: PropTypes.string,
  cardHeader: PropTypes.string,
  cardDescription: PropTypes.string,
  linkToStart: PropTypes.string,
  btnLabel: PropTypes.string.isRequired,
};

StartBox.defaultProps = {
  btnLabel: 'Start',
};

export default StartBox;
