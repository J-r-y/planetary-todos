"use client";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FormEvent, useState } from "react";
import { AddTodo } from "@/components/todo/AddTodo";
import { TodoList } from "@/components/todo/TodoList";

export function TodoTable() {
	const [todos, setTodos] = useState<string[]>([]);

	const submit = (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const todo: string = (form.children[0] as HTMLInputElement).value;
		if (todo.length > 0) setTodos(oldTodos => [todo, ...oldTodos]);
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
