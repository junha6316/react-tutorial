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
