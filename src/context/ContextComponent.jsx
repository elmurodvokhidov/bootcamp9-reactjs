import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const Context = createContext();

export default function ContextFunction({ children }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios("http://localhost:5000/todos")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => console.log(error))

    }, []);

    return (
        <Context.Provider value={{
            todos,
            setTodos,
        }}>
            {children}
        </Context.Provider>
    )
}