import { Database } from 'sqlite3'
import { create_migrations } from './00_create_migrations'
import { create_websites } from './01_create_websites'

export async function up(db: Database) {
  await create_migrations(db)
  await create_websites(db)
}
