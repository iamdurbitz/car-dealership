import { open } from 'sqlite'
import sqlite3 from 'sqlite3'
import { cars } from './data.js'

async function seedTable() {

    const db = await open({
        filename: 'database.db',
        driver: sqlite3.Database
    })
    try{
        await db.exec('BEGIN TRANSACTION')

        for (const {brand, model, year, price, color} of cars){
            await db.run(`
                INSERT INTO cars (brand, model, year, price, color)
                VALUES(?,?,?,?,?)`, [brand, model, year, price, color])
        }
        await db.exec('COMMIT')
        console.log("All records are inserted")
    } catch (err) {
        await db.exec('ROLLBACK')
        console.log("Error inserting data", err.message)
    } finally {
        await db.close()
        console.log('Connection closed')
    }
}

seedTable()