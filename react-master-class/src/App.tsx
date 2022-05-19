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
  password1: string;
  password2: string;
  extraError?: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: 'test@test.com',
    },
  });

  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError('password1', { message: 'passwords are not the same' });
    }
    setError('extraError', { message: 'Server Offline' });
  };
  const onInvalid = (data: any) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('email', {
          required: 'Email is Required',
          minLength: 10,
          validate: (value) => !value.includes('junha '),
        })}
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
        {...register('password1', { required: 'password required' })}
        placeholder="password"
      />
      <input
        {...register('password2', { required: 'password required' })}
        placeholder="password"
      />
      <span>{errors.password1?.message}</span>
      <button>Add</button>
      <span>{errors.extraError?.message}</span>
    </Form>
  );
}

export default App;
