import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  const onInvalid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <Form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('email', { required: true, minLength: 10 })}
        placeholder="email"
      />
      <input
        {...register('firstName', { required: true })}
        placeholder="firstName"
      />
      <input
        {...register('lastName', { required: true })}
        placeholder="lastName"
      />
      <input
        {...register('address', { required: true })}
        placeholder="address"
      />
      <input
        {...register('username', { required: true })}
        placeholder="username"
      />
      <input
        {...register('password', { required: 'password required' })}
        placeholder="password"
      />
      <button>Add on</button>
    </Form>
  );
}

export default App;
