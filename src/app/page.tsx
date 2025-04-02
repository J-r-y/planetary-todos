import { TodoListDialog } from "./todos/components/TodoListDialog";

export default async function Home() {
	return (
		<div className="container mx-auto py-10">
			<TodoListDialog />
		</div>
	);
}
