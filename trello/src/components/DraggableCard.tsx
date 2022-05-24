import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import React from 'react';
interface IProps {
  draggableId: string;
  index: number;
  key: string;
}

interface ICardProps {
  isDragging: boolean;
}
const Card = styled.div<ICardProps>`
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? '#74b9ff' : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? '0px 2px 5px rgba(0,0,0,0.5)' : 'none'};
  margin-bottom: 5px;
  transition: background-color 0.4s ease-in-out;
`;

function DraggableCard(props: IProps) {
  const { draggableId, index } = props;
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {draggableId}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
