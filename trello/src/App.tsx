import React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import { toDoItemsState } from './atoms';
import DroppableBoard from './components/Board';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:black
}
a {
  text-decoration:none;
  color: inherit;
}
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDoItems] = useRecoilState(toDoItemsState);

  const toDoCategories = Object.keys(toDos);

  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId: text, source } = info;
    
    if (destination?.droppableId === source.droppableId) {
      setToDoItems((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        const taskObj = boardCopy[source.index]
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0,taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    } else if (destination?.droppableId !== source.droppableId) {
      if (destination) {
        setToDoItems((oldToDos) => {
          const sourceBoard = [...oldToDos[source.droppableId]];
          const targetBoard = [...oldToDos[destination?.droppableId]];
          const taskObj = sourceBoard[source.index]
          sourceBoard.splice(source.index, 1);
          targetBoard.splice(destination.index, 0, taskObj);
          return {
            ...oldToDos,
            [source.droppableId]: sourceBoard,
            [destination.droppableId]: targetBoard,
          };
        });
      }
    }
  };
  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {toDoCategories.map((toDoCategory, idx) => {
              return (
                <DroppableBoard
                  key={idx}
                  toDos={toDos[toDoCategory]}
                  boardId={toDoCategory}
                />
              );
            })}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
