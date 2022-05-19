import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRecoilState, atom } from 'recoil';
import styled from 'styled-components';
import { IToDo, IForm } from '../index.d';
import { toDoState } from '../atoms';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function CreateToDo() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useRecoilState<IToDo[]>(toDoState);
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setError,
  } = useForm<IForm>({});

  const onValid = (data: IForm) => {
    setToDos((oldToDos: IToDo[]) => [
      { id: oldToDos.length, text: data.toDo, category: 'TO_DO' },
      ...oldToDos,
    ]);
    setToDo('');
  };
  const onInvalid = () => {};
  return (
    <Form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('toDo', {
          required: 'toDo is Required',
          minLength: 5,
        })}
        placeholder="Show me what you should do"
      />
      <button>Add</button>
    </Form>
  );
}

export default CreateToDo;
