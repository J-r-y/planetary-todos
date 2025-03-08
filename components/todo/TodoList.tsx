import { TodoItem } from "@/app/todos/TodoItem";

export function TodoList({ todos }: { todos: string[] }) {
	return (
		<>
			{
				todos.map((todo: string, index: number) => (
					<TodoItem key={index} title={todo} />
				))
			}
		</>
	);
}
