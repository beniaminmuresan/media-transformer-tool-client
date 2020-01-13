import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const renderTextField = ({
  label,
  placeholder,
  required,
  variant,
  margin,
  fullWidth,
  id,
  name,
  autoComplete,
  autoFocus,
  input,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    required={required}
    variant={variant}
    margin={margin}
    fullWidth={fullWidth}
    id={id}
    name={name}
    autoComplete={autoComplete}
    autoFocus={autoFocus}
    {...input}
    {...custom}
  />
)

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: 70,
    height: 70,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  redText: {
    textAlign: "center",
    color: 'red',
    marginTop: 20
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class TextToSpeech extends Component {

  onSubmit = formProps => {
    this.props.texttospeech(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <form className={classes.form} onSubmit={handleSubmit(this.onSubmit)}>
            <Field 
              name="file_name"
              type="text"
              label="File Name"
              component={renderTextField}
              autoComplete="none"
              variant="outlined"
              margin="normal"
              fullWidth
              id="file_name"
            />
            <Field 
              name="text"
              type="text"
              label="Text"
              component={renderTextField}
              autoComplete="none"
              variant="outlined"
              margin="normal"
              fullWidth
              id="text"
            />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Transform</Button>
        </form>
        <p>{this.props.textToSpeechUrl}</p>
      </Container>
    );
  }
};

function mapStateToProps(state) {
  return { 
    textToSpeechUrl: state.text_to_speech.textToSpeechUrl,
    textToSpeechError: state.text_to_speech.textToSpeechError
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'texttospeech' }),
  withStyles(styles)
)(TextToSpeech);