import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { sql, InferInsertModel, InferSelectModel } from "drizzle-orm";

// Define the user table schema
export const user = sqliteTable("user", {
  id: integer("id").primaryKey(), 
  username: text("username").notNull().unique(), 
  email: text("email").notNull().unique(), 
  password: text("password").notNull(), // Password (hashed)
  created: text("created").default(sql`CURRENT_TIMESTAMP`), // Account creation timestamp
  updated: text("updated").default(sql`CURRENT_TIMESTAMP`), // Last updated timestamp
});

// Define types for inserting and selecting data
export type UserInsert = InferInsertModel<typeof user>; // For inserting new users
export type UserSelect = InferSelectModel<typeof user>; // For querying user data
