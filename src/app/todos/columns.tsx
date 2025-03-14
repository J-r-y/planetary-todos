"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Todo = {
	id: number
	title: string
	finished: boolean
}
export const todos: Todo[] = [
	{
		id: 1,
		title: "This app",
		finished: false,
	},
	{
		id: 2,
		title: "Finish this app",
		finished: false,
	},
	{
		id: 3,
		title: "Lyrics app",
		finished: true,
	}
]

export const columns: ColumnDef<Todo>[] = [
	{
		accessorKey: "id",
		header: "Id",
	},
	{
		accessorKey: "title",
		header: "Title",
	},
	{
		accessorKey: "finished",
		header: "Finished",
	},
]
