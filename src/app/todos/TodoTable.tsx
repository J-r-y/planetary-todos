"use client";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FormEvent, useEffect, useState } from "react";
import { AddTodo } from "./AddTodoButton";
import { TodoList } from "./TodoList";
import { useSession } from "next-auth/react";
import { addTodo, getTodos } from "../actions";
import { Todo } from "./columns";

export function TodoTable() {
	const [todos, setTodos] = useState<Todo[]>([])
	const { data: session } = useSession()

	useEffect(() => {
		const initTodos = async () => {
			if (session?.user?.id) {
				const t = await getTodos(session.user.id)
				setTodos(t)
			}
		}
		initTodos()
	}, [session?.user?.id])

	const submit = (e: FormEvent) => {
		e.preventDefault();
		if (session?.user?.id) {
			const form = e.target as HTMLFormElement;
			const todoTitle: string = (form.children[0] as HTMLInputElement).value;
			addTodo(session.user.id, todoTitle).then((newTodo) => {
				setTodos(oldTodos => [newTodo[0], ...oldTodos]);
			})
		}
	}

	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow >
						<TableHead colSpan={3}>
							<span className="flex flex-row items-center py-2">
								<AddTodo submit={(e: FormEvent) => submit(e)} />
							</span>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TodoList todos={todos} />
				</TableBody>
			</Table>
		</div>
	);
}
