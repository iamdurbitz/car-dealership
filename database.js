import { open } from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'node:path'
console.log("node'den selam")

async function createTable() {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })
    await db.exec(`
        CREATE TABLE IF NOT EXISTS cars(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT NOT NULL,
        model TEXT NOT NULL,
        year INTEGER NOT NULL,
        price REAL NOT NULL,
        color TEXT NOT NULL)`)

    await db.close()
    console.log("Database created successfully")
}

createTable()