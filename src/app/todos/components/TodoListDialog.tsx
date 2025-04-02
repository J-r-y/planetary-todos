"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { TodoTable } from "./TodoTable"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { getTodos } from "@/app/actions"

export function TodoListDialog() {
	const [todos, setTodos] = useState<Todo[]>([])
	const { data: session } = useSession()

	useEffect(() => {
		if (!(todos.length > 0)) {
			const loadTodos = async () => {
				if (session?.user?.id) {
					const t = await getTodos(session.user.id)
					setTodos(t)
				}
			}
			loadTodos()
		}
	}, [session, todos])

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open todos</Button>
			</DialogTrigger>
			<DialogContent className="absolute top-[12rem] lg:w-[50vw] lg:max-w-[50vw] w-[100vw]">
				<DialogHeader>
					<DialogTitle>Add todos</DialogTitle>
					<DialogDescription>
						Add, remove or check todos
					</DialogDescription>
				</DialogHeader>
				<TodoTable initialTodos={todos} />
			</DialogContent>
		</Dialog>
	)
}
