import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

// Context hosil qilish
export const Context = createContext();

export default function ContextFunction({ children }) {
    // API manzil
    const API_URL = "http://localhost:5000";
    // Serverdan kelgan ma'lumotlarni saqlovchi state
    const [todos, setTodos] = useState([]);
    // Inputdan olingan ma'lumotlarni saqlovchi state
    const [newTodo, setNewTodo] = useState({
        title: ""
    });

    // Inputdan ma'lumot olish funksiyasi
    const getInputValue = (e) => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value
        })
    }

    // Serverdan ma'lumot olish funksiyasi
    function getData() {
        axios(API_URL + "/todos")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => console.log(error))
    };

    // Serverdan ma'lumot olinayotganda cheksizlikni to'xtatish
    useEffect(() => {
        getData();
    }, []);

    // Yangi ma'lumot hosil qilish
    const handleCreate = async function () {
        try {
            if (!newTodo.id) {
                // Ma'lumot qo'shsin
                await axios.post(API_URL + "/todos", newTodo);
            } else {
                // Ma'lumotni tahrirlasin
                await axios.put(`${API_URL}/todos/${newTodo.id}`, newTodo);
            }
            setNewTodo({
                title: ""
            });
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    // Mavjud ma'lumotni o'chirib yuborish funksiyasi
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/todos/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    // Ma'lumotni tahrirlash funksiyasi
    function handleEdit(todo) {
        setNewTodo(todo);
    };

    // Contextdagi barcha funksiyalarni export qilish
    return (
        <Context.Provider value={{
            todos,
            newTodo,
            getInputValue,
            handleCreate,
            handleDelete,
            handleEdit,
        }}>
            {children}
        </Context.Provider>
    )
}