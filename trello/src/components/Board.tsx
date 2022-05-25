import { useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ITodo, toDoItemsState } from '../atoms';
import DraggableCard from './DraggableCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 10px;
  min-height: 200px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? '#dfe6e9'
      : props.isDraggingFromThis
      ? '#b2bec3'
      : 'transparent'};
  flex-grow: 1;
  transition: background-color 0.5s ease-in-out:
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 18px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 5px;
`;

const CreateToDoInput = styled.input`
    width:100%;
    border-radius: 5px;
    height: 100%
    padding: 5px 5px;
`
interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

function DroppableBoard({ toDos, boardId }: IBoardProps) {
  const  setToDos= useSetRecoilState(toDoItemsState)
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo
    }
    setToDos(oldBoards => {return {...oldBoards, [boardId]: [...oldBoards[boardId], newToDo]}})
    
    setValue('toDo', '');
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <CreateToDoInput 
          {...register('toDo', { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, idx) => {
              return (
                <DraggableCard key={toDo.text} index={idx} draggableId={toDo.text} />
              );
            })}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default DroppableBoard;
