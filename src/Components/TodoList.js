import React from 'react';
import { useState } from 'react/cjs/react.development';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList() {

// state array which jold all TODOS
const [todos, setTodos] = useState([]);


// Add a todo to list
const addTask = task => {
    if (!task.text){
        return
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
}

// Remove todo from list
const removeTask = id => {
    let updatedTasks = [...todos].filter(task => task.id !== id)
    setTodos(updatedTasks)
}


// Task is Complelted 
const completeTask = id => {
    let updatedTasks = todos.map(todo => {
        if(todo.id === id) {
            todo.isComplete = true;
        }
        return todo;
    })
    setTodos(updatedTasks)
}

  return <div>
    <TodoForm addTask={addTask}></TodoForm>
    <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} > </Todo>
    </div>
}