import { Text, Pressable, View, TextInput, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import Button from '../components/button';
import { HobbitContext } from '../components/HobbitContext';
import { useContext, useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';


export default function Page() {
  const { hobbit, setHobbit } = useContext(HobbitContext);
  const [hobbitName, setHobbitName] = useState(hobbit.name);
  const [hobbitActor, setHobbitActor] = useState(hobbit.actor);
  const [hobbitBestFriend, setHobbitBestFriend] = useState(hobbit.bestFriend);
  const [hobbitBestLine, setHobbitBestLine] = useState(hobbit.bestLine);
  const [hobbitRank, setHobbitRank] = useState(hobbit.rank);
  const [hobbitImageIndex, setHobbitImageIndex] = useState(hobbit.imageIndex);
  const db = useSQLiteContext();
//  const [displayImageIndexValue, setDisplayImageIndexValue] = useState(hobbit.imageIndex.toString());



  const updateHobbitInfo = async () => {
        console.log("UPDATING INFO");

        const imgIndex = parseInt(hobbitRank) - 1;

        const latestData = {
                "name": hobbitName,
                "actor": hobbitActor,
                "bestFriend": hobbitBestFriend,
                "bestLine":  hobbitBestLine,
                "imageIndex": imgIndex,
        }
         await db.runAsync('UPDATE hobbits SET name = ?, actor = ?, bestFriend = ?, bestLine = ? WHERE imageIndex = '+imgIndex+';',
                      [hobbitName, hobbitActor, hobbitBestFriend, hobbitBestLine, imgIndex]);

        const updatedHobbit = await db.getAllAsync('SELECT * FROM hobbits where imageIndex = '+imgIndex);

        setHobbit(updatedHobbit);
        console.log(updatedHobbit)




  }



  const updateHobbitImageIndex = (text) => {
     setDisplayImageIndexValue(text);
     if( !isNaN(text) && text != "") {
        setDisplayImageIndexValue(parseInt(text));
        console.log("setting data");
     }
  }


  return (
    <>
        <Text>Hobbit Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={setHobbitName}
            value={hobbitName}
        />
        <Text>Actor</Text>
        <TextInput
            style={styles.input}
            onChangeText={setHobbitActor}
            value={hobbitActor}
        />
        <Text>Best Friend</Text>
        <TextInput
            style={styles.input}
            onChangeText={setHobbitBestFriend}
            value={hobbitBestFriend}
        />
        <Text>Best Line</Text>
        <TextInput
            style={styles.input}
            onChangeText={setHobbitBestLine}
            value={hobbitBestLine}
        />
        <Text> Ranking: </Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={setHobbitRank}
            value={hobbitRank}
            placeholder="0"
         />



        <Button
            label={"Update"}
            onPress={updateHobbitInfo}
        />
    </>
    )
}

const styles = StyleSheet.create( {
    input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});