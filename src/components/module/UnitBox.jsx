import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ForwardIcon from 'material-ui/svg-icons/content/forward';

import UnitInfoContent from './UnitInfoContent';
import UnitTestContent from './UnitTestContent';

function UnitBox(props) {
  return (
    <Card className="unit-box" initiallyExpanded>
      <CardHeader
        title={props.title}
        subtitle={props.subtitle}
      />
      <CardText>
        {props.info}
      </CardText>
      {
        props.toggled ?
          <UnitTestContent tests={props.tests} />
        :
          <UnitInfoContent sections={props.sections} />
      }
      <CardActions expandable={false}>
        {
          props.toggled ?
            <RaisedButton
              labelPosition="before"
              label={props.btnSubmitLabel}
              onClick={props.onSubmit}
              icon={<ForwardIcon />}
            />
          :
            <RaisedButton
              labelPosition="before"
              label={props.btnNextLabel}
              onClick={props.onClickNext}
              icon={<ForwardIcon />}
            />
        }
      </CardActions>
    </Card>
  );
}

UnitBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  info: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
  tests: PropTypes.array,
  toggled: PropTypes.bool,
  onClickNext: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  btnNextLabel: PropTypes.string.isRequired,
  btnSubmitLabel: PropTypes.string.isRequired,
};

export default UnitBox;
