import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { atom, useRecoilState } from 'recoil';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: 'DONE' | 'DOING' | 'TO_DO';
}

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useRecoilState<IToDo[]>(toDoState);

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setError,
  } = useForm<IForm>({});

  const onValid = (data: IForm) => {
    setToDos((oldToDos) => [
      { text: data.toDo, category: 'TO_DO' },
      ...oldToDos,
    ]);
    setToDo(data.toDo);
  };
  const onInvalid = (data: any) => {
    console.log(data);
  };
  console.log(toDo);
  return (
    <>
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
      <div>
        {toDos.map((toDo: IToDo) => {
          return <div key={toDo.text}>{toDo.text}</div>;
        })}
      </div>
    </>
  );
}

export default ToDoList;
