import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  username: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: 'test@test.com',
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  const onInvalid = (data: any) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('email', { required: 'Email is Required', minLength: 10 })}
        placeholder="email"
      />
      <span>{errors.email?.message}</span>
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
      <button>Add</button>
    </Form>
  );
}

export default App;
