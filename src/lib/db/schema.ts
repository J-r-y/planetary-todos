import { sql } from "drizzle-orm"
import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core"

export const userTable = pgTable("users", {
	userId: uuid("user_id").default(sql`gen_random_uuid()`).primaryKey(),
	name: text("name").notNull(),
})

export const todoTable = pgTable("todos", {
	todoId: uuid("todo_id").default(sql`gen_random_uuid()`).primaryKey(),
	userId: uuid("user_id")
		.notNull()
		.references(() => userTable.userId, { onDelete: "cascade" }),
	title: text("title").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	completed: boolean("completed").notNull().default(false),
})

// export const todoUserIdx = uniqueIndex("todo_user_idx").on(todoTable.userId)
