import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { post } from 'axios';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({ 
  input: { value: omitValue, onChange, onBlur }, 
  meta: omitMeta, 
  ...props 
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};

export const FileUpload = props => {
  const { handleSubmit } = props;
  const onFormSubmit = (data) => {
    let formData = new FormData();
    formData.append('name', data.name)
    formData.append('attachment', data.attachment)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token')
      }
    }
    const url = '/v1/media_histories/';
    post(url, formData, config)
      .then(function(response) {
          console.log(response);
      })
      .catch(function(error) {
          console.log(error);
      });
    }
    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label>Attachment</label>
          <Field name="attachment" component={FileInput} type="file"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

export default reduxForm({
    form: 'fileupload'
})(FileUpload)