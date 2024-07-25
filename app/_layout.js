import { Slot } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/navBar.js';
import { useState } from 'react';
import hobbitData from '../assets/hobbits.json';
import {hobbits} from './index.js';
import { HobbitContext } from '../components/HobbitContext'
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';

export default function HomeLayout() {
  const [hobbit, setHobbit] = useState(hobbitData);


  return (
    <View style={styles.container}>
        <SQLiteProvider databaseName="movies3.db" onInit={initializeDB}>
            <NavBar/>
            <HobbitContext.Provider value={{hobbit, setHobbit}}>
                <Slot />
            </HobbitContext.Provider>
        </SQLiteProvider>
    </View>
  )
}

async function initializeDB(db) {

    await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        CREATE TABLE IF NOT EXISTS hobbits (
        name TEXT PRIMARY KEY NOT NULL, actor TEXT NOT NULL, bestFriend TEXT NOT NULL,
         bestLine TEXT NOT NULL, imageIndex INT NOT NULL, imageURL TEXT NOT NULL );
    `);
     const result = await db.getAllAsync('SELECT * FROM hobbits');
    if( result.length == 0 ) {
        await db.runAsync('INSERT INTO hobbits (name, actor, bestFriend, bestLine, imageIndex, imageURL) VALUES (?, ?, ?, ?, ?, ?)', "Samwise Gamgee", "Sean Aston", "Mr. Frodo", "'I en\'t been dropping no eaves sir!'", 0,"URL");
        await db.runAsync('INSERT INTO hobbits (name, actor, bestFriend, bestLine, imageIndex, imageURL) VALUES (?, ?, ?, ?, ?, ?)', "Bilbo Baggins", "Ian Holm", "Gandalf", "'I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.'", 1, "URL");
        await db.runAsync('INSERT INTO hobbits (name, actor, bestFriend, bestLine, imageIndex, imageURL) VALUES (?, ?, ?, ?, ?, ?)', "Frodo Baggins", "Elijah Wood", "Sam", "'I wish it need not have happened in my time...'", 2, "URL");
    }
    const firstRow = await db.getFirstAsync('SELECT * FROM hobbits');
//    console.log("in layout.js")
//    console.log(firstRow.name, firstRow.actor, firstRow.bestFriend, firstRow.bestLine, firstRow.imageIndex);
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
    },
});