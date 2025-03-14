import { TodoTable } from "./todos/TodoTable";

export default function Home() {
	return (
		<div className="container mx-auto py-10">
			<TodoTable />
		</div>
	);
}
