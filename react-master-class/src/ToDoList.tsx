import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
function ToDoList() {
  const { register, watch, handleSubmit } = useForm();

  const onValid = (data: any) => {};
  const onInvalid = (data: any) => {};

  return (
    <div>
      <Form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input {...register('Email', { required: true })} placeholder="Email" />
        <input
          {...register('firstName', { required: true })}
          placeholder="First Name"
        />
        <input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register('phoneNumber', { required: true })}
          placeholder="Phone Number"
        />
        <input {...register('name', { required: true })} placeholder="Name" />
        <button>Add</button>
      </Form>
    </div>
  );
}

export default ToDoList;
