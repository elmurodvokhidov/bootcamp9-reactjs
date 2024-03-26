import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const Context = createContext();

export default function ContextFunction({ children }) {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({
        title: ""
    });

    const getInputValue = (e) => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value
        })
    }

    function getData() {
        axios("http://localhost:5000/todos")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => console.log(error))
    };

    useEffect(() => {
        getData();
    }, []);

    const handleCreate = async function () {
        try {
            await axios.post("http://localhost:5000/todos", newTodo);
            setNewTodo({
                title: ""
            });
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Context.Provider value={{
            todos,
            newTodo,
            getInputValue,
            handleCreate,
            handleDelete,
        }}>
            {children}
        </Context.Provider>
    )
}