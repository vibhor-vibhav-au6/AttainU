import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='Full Name' />
        <TextInput source='Country' />
        <TextInput source='Email' />
        <DateInput source='Date of birth' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
