- useForm 이용

- register, formState, handleSubmit
- register : input 등록
- formState: 현재 FormState 확인
- handleSubmit: 값이 valid, invalid할때 동작 설정

```javascript
function App(){
    const { register, formState, handleSubmit } = useForm()

    const validationRule ={
        required: true // 또는 invalid한 인풋일 때 message
        required: "u need password"
        minLength:{
            value: 10,
            message: "too Short"
        }
        pattern: "정규표현식",
        validate: () =>true // custom validation function
    }

    const onValid =  (data: any) =>{ }
    const onInvalid = (data:any) => { }

    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input {...register("email", validationRule)}>
        </form>
    )
}

```

- 리액트 커스텀한 훅들은 대부분 하나의 컴포넌트 내에 지나치게 많은 코드를 해결하기 위해 존재하는 것 같다.
