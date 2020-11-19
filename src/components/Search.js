import React, {useContext, useState} from 'react';
import { AlertContext } from '../Context/Alert/alertContext';
import { GithubContext } from '../Context/github/githubContext';



export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {  //если клавиша не Enter
            return
        }

        github.clearUsers()

        if (value.trim()) {       //если нажали Enter то будет выполняться данный код
            alert.hide()
            github.search(value.trim()) //метод trim убирает пробелы
        } else {
            alert.show('Введите данные пользователя')
        }
    }

    return (
        <div className='form-group' >
            <input 
                type="text"
                className='form-control'
                placeholder='Введите ник пользователя'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}