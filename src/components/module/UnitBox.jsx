import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ForwardIcon from 'material-ui/svg-icons/content/forward';

function UnitBox(props) {
  const sections = [];
  if (props.sections) {
    props.sections.forEach((item, index) => {
      sections.push(
        <Card className="unit-section" initiallyExpanded key={index} style={{ margin: '0.5em', backgroundColor: '#333' }}>
          <CardHeader
            title={item.title}
            subtitle={item.subtitle}
          />
          <CardText className="unit-section-cardtext">
            {
              item.pictureUrl ?
                <div className="sectionImg">
                  <img alt={item.title} src={item.pictureUrl} />
                </div>
                : null
            }
            <div className="sectionInfo">
              {item.info}
            </div>
          </CardText>
        </Card>
      );
    });
  }

  return (
    <Card className="unit-box" initiallyExpanded>
      <CardHeader
        title={props.title}
        subtitle={props.subtitle}
      />
      <CardText>
        {props.info}
      </CardText>
      {sections}
      <CardActions expandable={false}>
        <RaisedButton
          labelPosition="before"
          label={props.btnSubmitLabel}
          onClick={props.onSubmit}
          icon={<ForwardIcon />}
        />
      </CardActions>
    </Card>
  );
}

UnitBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string,
  info: PropTypes.string.isRequired,
  sections: React.PropTypes.array.isRequired,
  tests: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  btnSubmitLabel: PropTypes.string.isRequired,
};

export default UnitBox;
