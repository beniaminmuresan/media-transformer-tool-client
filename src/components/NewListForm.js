import React from 'react';
import Button from '@material-ui/core/Button';

const NewListForm = ({onNewList = f => f}) => {
  let name, description
  const submit = e => {
    e.preventDefault()
    onNewList(name.value, description.value)
    name.value = ''
    description.value = ''
    name.focus()
  }

  return (
    <form onSubmit={submit}>
      <input ref={input => name = input} type="text" placeholder="Name" required />
      <input  ref={input => description = input} type="text" placeholder="Description" required />
      <Button type="submit" variant="contained" color="primary">
        Add List
      </Button>
    </form>
  )
}

export default NewListForm;