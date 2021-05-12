import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='Id' />
        <TextInput source='Name' />
        <TextInput source='Email' />
        <TextInput source='Country' />
        <DateInput source='Email' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
