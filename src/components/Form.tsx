import useNewSubFrom from '../hooks/useNewSubForm'
import Sub from '../types'



interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, dispatch] = useNewSubFrom()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        dispatch({ type: "clear" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({ type: "clear" })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' />
            <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' />
            <input onChange={handleChange} value={inputValues.subMonths} type="number" name='subMonths' />
            <textarea onChange={handleChange} value={inputValues.description} name='description' />

            <button type='button' onClick={handleClear}>Clear Form</button>

            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form