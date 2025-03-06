import { Checkbox } from "@/components/ui/checkbox";

export function TodoItem(props: { title: string }) {
	return (
		<div className="flex flex-row items-center w-full p-2">
			<Checkbox className="w-5 h-5" />
			<span className="mx-4 w-full overflow-ellipsis">{props.title}</span>
		</div>
	);
}
