import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable('users', {
  id: text('id').primaryKey().notNull(),

  name: text('name').notNull(),
  surname: text('surname').notNull(),
  lastName: text('last_name').notNull(),
  password: text('password').notNull(),
  phoneNumber: text('phone_number').notNull()
})
