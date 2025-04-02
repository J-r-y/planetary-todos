"use server"

import { TodoListDialog } from "./components/TodoListDialog";

export default async function Table() {
	return (
		<div className="container mx-auto py-10">
			<TodoListDialog />
		</div>
	);
}
