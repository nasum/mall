import { Database } from 'sqlite3'
import { up } from './migrations'
export class DB {
  private db: Database

  constructor(db: Database) {
    up(db)
    this.db = db
  }

  public exec(query: string) {
    this.db.exec(query)
  }

  public get(query: string) {
    return new Promise((resolve, reject) => {
      this.db.get(query, (err, row) => {
        if (err) {
          reject(err)
        } else {
          resolve(row)
        }
      })
    })
  }

  public all(query: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.all(query, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }

  public run(query: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(query, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }

  public close() {
    this.db.close()
  }
}
