import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  DateField,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid >
        <TextField source='id' />
        <TextField source='Country' />
        <TextField source='Full Name' />
        <DateField source='Date of birth' />
        <EmailField source='Email' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList
