"use server"

import { TodoTable } from "./TodoTable";

export default async function Table() {

	return (
		<div className="container mx-auto py-10">
			<TodoTable />
		</div>
	);
}
