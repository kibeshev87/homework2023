import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: any,
                            setError: any,
                            setName: any,
                            addUserCallback: any) => {

    if (name.trim() !== '') {
        addUserCallback(name)
        /*setError('')*/
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }
    /*if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        setError(null)
        addUserCallback(name)
        setName('')
    }*/
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: any, setError: any) => {
    /*setError('')*/
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }// если имя пустое - показать ошибку
}

export const pureOnEnter = (e: any, addUser: any) => {
    if (e.key === 'Enter') {
        addUser()
    }// если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value) // need to fix
        setError('') //error &&
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // users.lenght???? need to fix
    const lastUserName = users[users.length - 1]  // users.lenght[-1] name need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
