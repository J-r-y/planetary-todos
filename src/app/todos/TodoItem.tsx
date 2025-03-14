import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";

export function TodoItem(props: { title: string }) {
	return (
		<TableRow>
			<TableCell className="flex flex-row items-center w-full">
				<Checkbox className="w-5 h-5 transform-[translateY(-2px)]" />
				<span className="mx-4 w-full overflow-ellipsis">{props.title}</span>
			</TableCell>
		</TableRow>
	);
}
