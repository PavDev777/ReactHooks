import React from 'react';
import { useAlert } from './AlertContext';

export default function Main() {
    const {toggleAlert} = useAlert()
    return (
        <>
            <h1>Привет в примере c context</h1>
            <button onClick={toggleAlert} className='btn btn-success'>Показать alert</button>
        </>
    )
}