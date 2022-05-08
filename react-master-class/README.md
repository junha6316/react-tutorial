
### styled component


* styled component
* 기본 사용 방법
``` javascript
const ThisIsStyleComponent = styled.div`
  color : tomato; // css attrs를 넣어주면 된다.

  span { // ThisIsStyledComponent 안에 있는 span의 style 지정
      color: "red";
      &:hover{ // hover시 동작 지정

      }
      &:activr{ // 클릭시 이벤트 지정

      }
  }
`
```
* styled component 간 상속
``` javascript

const Father = styled.div`
    color: tomato
`

const Son = styled(Father)`
    backgroud-color: "white"
`
```
* 동일한 attrs 지정
``` javascript
const RequiredInput = styled.input.attrs({required:true})`
    color: "red";
`
```
* theme : 색깔을 모아둔것
   ``` javascript

    const whiteTheme ={
        textColor: "#111",
        backgroundColor:"whitesmoke"
    }
   <ThemeProvider theme={whiteTheme}>
        <App />
   </ThemeProvider>


   // styled component 안에서는
   
    const RequiredInput = styled.input.attrs({required:true})`
        color: ${props=>props.theme.textColor};
    `
    ```


   ```