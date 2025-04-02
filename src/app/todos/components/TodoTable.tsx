"use client";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FormEvent, useState } from "react";
import { AddTodo } from "./AddTodo";
import { useSession } from "next-auth/react";
import { addTodo } from "@/app/actions";
import { TodoList } from "./TodoList";

export function TodoTable({ initialTodos }: { initialTodos: Todo[] }) {
	const [todos, setTodos] = useState<Todo[]>(initialTodos)
	const { data: session } = useSession()


	const submit = (e: FormEvent) => {
		e.preventDefault();
		if (session?.user?.id) {
			const form = e.target as HTMLFormElement;
			const todoTitle: string = (form.children[0] as HTMLInputElement).value;
			addTodo(session.user.id, todoTitle).then((newTodo) => {
				setTodos(oldTodos => [newTodo[0], ...oldTodos]);
			})
			form.reset()
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
