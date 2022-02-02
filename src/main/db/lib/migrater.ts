import { Database } from 'sqlite3'

export async function migrate(
  db: Database,
  query: string,
  name: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(query, (err: Error) => {
      if (err) {
        reject(err)
      } else {
        const stmt = db.prepare(
          'INSERT INTO migrations(name, created_at) VALUES (?, ?)'
        )
        stmt.run(name, new Date().getTime())
        resolve()
      }
    })
  })
}
