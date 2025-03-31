"use server"

import { db } from "@/lib/db"
import { todoTable } from "@/lib/db/schema"
import { and, eq } from "drizzle-orm"

export async function addTodo(userId: string, title: string) {
	return await db.insert(todoTable).values({ userId, title }).returning()
}

export async function removeTodo(userId: string, todoId: string) {
	await db.delete(todoTable).where(and(
		eq(todoTable.userId, userId),
		eq(todoTable.todoId, todoId),
	))
}

export async function getTodos(userId: string) {
	return await db.select().from(todoTable).where(eq(todoTable.userId, userId))
}

export async function updateTodo(userId: string, todoId: string, completed: boolean) {
	await db.update(todoTable).set({ completed }).where(and(
		eq(todoTable.userId, userId),
		eq(todoTable.todoId, todoId),
	))
}
