- react-beautiful-dnd
- Droppable, Draggable
- React.memo

- 드래그 할떄 또는 드롭하는 하는 시점에서 무언가 하고 싶으면 snapshot

```
snapshot

isDragging
isDropAnimating
draggingOver
combineWith
combineTargetFor
mode

```

- styledComponent에서 받을 props 정의

```javascript
styled.div < { test: boolean } > ``;
```

- transition

```css
 transition: background-color 0.5s ease-in-out:
```

- reference: grap html element using JS
  HTML 요소를 가져올 수 있게 해줌

```javascript
const inputRef = useRef<HTMLVideoElement>(null);

// inputRef.current?.focus()
<input ref={inputRef}>
```
