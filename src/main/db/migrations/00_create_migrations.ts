import { Database } from 'sqlite3'
import { migrate } from '../lib/migrater'

export async function create_migrations(db: Database): Promise<void> {
  return migrate(
    db,
    'CREATE TABLE migrations (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, created_at INTEGER)',
    create_migrations.name
  )
}
