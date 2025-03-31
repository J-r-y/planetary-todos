"use server"

import { TodoTable } from "./components/TodoTable";

export default async function Table() {

	return (
		<div className="container mx-auto py-10">
			<TodoTable />
		</div>
	);
}
