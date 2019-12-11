import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, TextField } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    maxWidth: '300px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  uploadContent: {
    with: '100%',
    textAlign: "center",
    position: 'relative',
    display: "inline"
  }
});

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

class FileUpload extends Component {

  render() {
    const { handleSubmit } = this.props;
    const { classes } = this.props;
  
    const adaptFileEventToValue = delegate => e => {
      delegate(e.target.files[0]);
    }
  
    const FileInput = ({ 
      input: { value: omitValue, onChange, onBlur }, 
      meta: omitMeta, 
      ...props 
    }) => {
      return (
        <TextField
          onChange={adaptFileEventToValue(onChange)}
          onBlur={adaptFileEventToValue(onBlur)}
          type="file"
          {...props.input}
          {...props}
        />
      );
    };
  
    const onFormSubmit = data => {
      this.props.uploadfile(data);
    }
  
    return (
      <form className={classes.form} onSubmit={handleSubmit(onFormSubmit)}>
        <Field
          name="name"
          type="text"
          label="Name of the File"
          component={renderTextField}
          autoComplete="none"
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          autoFocus
          required
        />
        <div className={classes.uploadContent}>
          <Field name="attachment" component={FileInput} type="file"/>
        </div>
        <Button className={classes.uploadContent} variant="contained" color="primary" type="submit"> Submit </Button>
        <p>{this.props.fileUrl}</p>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { 
    fileUrl: state.upload.uploadFileUrl,
    uploadFileError: state.upload.uploadFileError
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'uploadfile' }),
  withStyles(styles)
)(FileUpload);