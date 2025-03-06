"use client";

import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ListPlus } from "lucide-react";
import { FormEvent, useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoTable() {
	const [todos, setTodos] = useState<string[]>([]);
	// const table = useReactTable({
	// 	data,
	// 	columns,
	// 	getCoreRowModel: getCoreRowModel(),
	// });

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
								<ListPlus className="block ml-1 mr-2" />
								<form onSubmit={(e) => submit(e)} className="w-full">
									<Input />
								</form>
							</span>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{todos.map((todo: string, index: number) => (
						<TodoItem key={index} title={todo} />
					))}
				</TableBody>
			</Table>
		</div>
	);
}
