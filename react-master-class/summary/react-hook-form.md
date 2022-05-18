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
