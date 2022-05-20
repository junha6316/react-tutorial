import { Draggable } from 'react-beautiful-dnd';

interface IProps {
  draggableId: string;
  index: number;
  key: number;
}
function DraggableLi(props: IProps) {
  const { draggableId, index } = props;
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {draggableId}
        </li>
      )}
    </Draggable>
  );
}

export default DraggableLi;
