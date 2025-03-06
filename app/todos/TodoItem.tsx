import { TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export function TodoItem(props: { title: string }) {
	return (
		<TableRow className="flex flex-row items-center w-full mx-2">
			<Checkbox className="w-5 h-5" />
			<TableCell>{props.title}</TableCell>
		</TableRow>
	);
}
