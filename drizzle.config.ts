import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './drizzle/migrations',
  schema: './drizzle/schema/*',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'file:local.db'
  }
})
