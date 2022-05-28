- Framer Motion을 활용한 anmation 실습
- framer를 사용하면 일반 HTML 태그 사용 불가 motion.div 이런식으로 사용

- styled-component와 사용하기 위해선

```typescript
const Box = styled(motion.div)``; //처럼 사용
```

- motion html component prop

```typescript
<Box
transition={{delay, damping, type, stiffness, mass, bounce }}
animate={{borderRadius}}
initial={{}}
>
```

- variants : 시작과 끝 애니메이션을 지정해 변수로 애니메이션 제어

```typescript
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: 'spring' } },
};
<Box variants={myVars} initial="start" animate="end" />;
```

- 자식 컴포넌트에 자동으로 전달

- drag

```Javascript
<BiggerBox ref={biggerBoxRef}>
    <Box
      drag
      dragConstraints={biggerBoxRef}
      variants={boxVariants}
      whileHover="hover"
      whileTap="click"
      whileDrag="drag"
    />
</BiggerBox>
```

- 7.10 SVG animation

svg와 Path를 사용한 animation에 대해 배움
기본 형태

```HTML
<svg>
  <path
  stroke="white"
  strokeWidth="2"
  fill="currenColor"
  d="M86.642 0L122 94.469H0l3.914-11.741L35.494 0h14.44l10.391 28.88L72.201 0h14.44zM49.934 83.942h20.783L66.803 74.9l-6.478-17.139-10.391 26.181zM43.32 9.312l-28.88 74.63h24.966l1.215-1.214 14.44-39.407-3.914-10.527-7.827-23.482zm62.89 74.63l-2.7-9.042-7.827-19.838-7.828-22.268L78.68 9.312 65.59 43.32l15.654 40.621h24.967z">
  </path>
</svg>
```

- 7.11 AnimatePresence
  reactJS 없이지는 component를 animate
  animatePresence를 하기 위해선 컴포넌트가 visible 해야함
