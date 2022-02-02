import { Database } from 'sqlite3'
import { migrate } from '../lib/migrater'

export async function create_websites(db: Database): Promise<void> {
  return migrate(
    db,
    'CREATE TABLE websites (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, url TEXT, favicon TEXT, last_visited INTEGER)',
    create_websites.name
  )
}
