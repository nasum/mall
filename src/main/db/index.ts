import sqlite3 from 'sqlite3'
import { up } from './migrations'

const db = new sqlite3.Database('./db.sqlite')

export function init() {
  up(db)
}

export function exec(query: string) {
  db.exec(query)
}

export function closeDB() {
  db.close()
}
