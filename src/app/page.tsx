import { TodoTable } from "./todos/components/TodoTable";

export default async function Home() {
	return (
		<div className="container mx-auto py-10">
			<TodoTable />
		</div>
	);
}
