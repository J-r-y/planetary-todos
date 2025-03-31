declare global {
	export interface Todo {
		todoId: string
		userId: string
		title: string
		createdAt: Date
		completed: boolean
	}
}

export default global
