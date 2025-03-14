import { ListPlus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FormEventHandler } from 'react';

export function AddTodo({ submit }: { submit: FormEventHandler }) {
	return (
		<>
			<ListPlus className="block ml-1 mr-2" />
			<form onSubmit={(e) => submit(e)} className="w-full">
				<Input />
			</form>
		</>
	);
}
