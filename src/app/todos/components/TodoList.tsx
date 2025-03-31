import { TodoItem } from "@/app/todos/components/TodoItem";

export function TodoList({ todos }: { todos: Todo[] }) {

	return (
		<>
			{
				todos.map((todo: Todo, index: number) => (
					<TodoItem key={index} todo={todo} />
				))
			}
		</>
	);
}
