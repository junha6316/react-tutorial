import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
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
interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function DroppableBoard({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Title>{boardId}</Title>
            {toDos.map((toDo, idx) => {
              return (
                <DraggableCard key={toDo} index={idx} draggableId={toDo} />
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
