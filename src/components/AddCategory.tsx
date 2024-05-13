import { useState, ChangeEvent, FormEvent } from "react"

interface Props {
    onNewCategory: Function;
}

export const AddCategory = ({ onNewCategory }: Props) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newInputValue = inputValue.trim()

        if (newInputValue.length <= 1) return;

        setInputValue('')
        onNewCategory(newInputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
        </form>
    )
}
