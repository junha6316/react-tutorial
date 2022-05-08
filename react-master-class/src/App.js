import styled, {keyframes} from "styled-components"

const Title = styled.h1`
  color: ${(props) => props.theme.textColor}
`

const Wrapper = styled.div`
  display: flex;
  background-color:${props => props.theme.backgroundColor}
`
const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius:0px;
  }
  50%{
    transform: rotate(180deg);
    border-radius: 30px
  }
  100%{
    transform: rotate(360deg);
    border-radius: 50px
  }

`

const Emoji = styled.span`
  font-size:16px;
`

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
  animation:${animation} 1s linear infinite;
  display:flex;
  justify-content:center;
  align-items:center;
  ${Emoji}{
    &:hover{
      font-size:50px;
    }
    &:active{
      opacity:0;
    }
  }
  
`

const Circle = styled(Box)`
  border-radius: 50px;
`

const Btn = styled.button`
  color: white;
  background-color:tomato;
  border: 0;
  border-radius:15px;
  
`

const Input = styled.input.attrs({required:true})`
  background-color: tomato;
`


function App() {
  return (
    <Wrapper>
      <Title>Hi</Title>
    </Wrapper>
  )
}

export default App;
