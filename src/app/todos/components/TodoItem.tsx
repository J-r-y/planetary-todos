"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { removeTodo, updateTodo } from "@/app/actions";

export function TodoItem({ todo }: { todo: Todo }) {
	const remove = () => {
		removeTodo(todo.userId, todo.todoId)
	}
	function checkedChange() {
		todo.completed = !todo.completed
		updateTodo(todo.userId, todo.todoId, todo.completed)
	}
	return (
		<TableRow>
			<TableCell className="group flex flex-row items-center w-full">
				<Checkbox className="w-5 h-5 transform-[translateY(-2px)]" onClick={checkedChange} defaultChecked={todo.completed} />
				<span className="mx-4 w-full text-ellipsis">{todo.title}</span>
				<Button onClick={remove} variant="ghost" size="icon" className="w-6 h-6 p-0 m-0 mr-2 hover:bg-zinc-600 dark:hover:bg-gray-50 opacity-0 group-hover:opacity-100 cursor-pointer">
					<X className="text-red-400" />
				</Button>
			</TableCell>
		</TableRow>

	);
}
