import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import DraggableLi from './components/DraggableLi';
function App() {
  const onDragEnd = () => {};
  const toDos: string[] = ['first', 'second'];
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {toDos.map((toDo, idx) => {
                return <DraggableLi key={idx} index={idx} draggableId={toDo} />;
              })}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
