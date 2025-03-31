"use client";

import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext({
	todos: [] as Todo[],
	setTodos: (todos: Todo[]) => { },
	addTodo: (todo: Todo) => { },
	removeTodo: (id: number) => { }
})

export function TodoProvider({
	initialTodos,
	children
}: {
	initialTodos: Todo[],
	children: React.ReactNode
}) {
	const [todos, setTodos] = useState(initialTodos)

	const addTodo = (todo: Todo) => setTodos((oldTodos) => [...oldTodos, todo])
	const removeTodo = (id: number) => {
		fetch(`${process.env.API_URL}/remove?id=${id}`)
		setTodos(todos.filter((todo) => {
			return todo.id !== id
		}))
	}

	return <TodoContext.Provider value={{ todos, setTodos, addTodo, removeTodo }}>
		{children}
	</TodoContext.Provider>
}

export function useTodos() {
	return useContext(TodoContext)
}
