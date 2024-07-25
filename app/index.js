import {useContext, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useSQLiteContext } from 'expo-sqlite';

import Navbar from '../components/navBar.js';
import Hobbit from '../components/hobbit.js';
import Button from '../components/button.js';
import HobbitContext from '../components/HobbitContext.js';

//import hobbits from '../assets/hobbits.json';

const firstHobbitImage = require('../assets/samwise.jpg');
const secondHobbitImage = require('../assets/bilbo.jpg');
const thirdHobbitImageImage = require('../assets/frodo.jpg');
const imageArray = [firstHobbitImage,secondHobbitImage,thirdHobbitImageImage];

let hobbits = [];

export default function App() {
  const db = useSQLiteContext();
  const [hobbitIndex, setHobbitIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(thirdHobbitImageImage);

//  const [hobbit, setHobbit] = useContext(HobbitContext);


  const handleHobbit1Press = () => {
    setHobbitIndex(0);
    setCurrentImage(firstHobbitImage);

  }

  const handleHobbit2Press = () => {
    setHobbitIndex(1);
    setCurrentImage(secondHobbitImage);
  }

  const handleHobbit3Press = () => {
    setHobbitIndex(2);
    setCurrentImage(thirdHobbitImageImage);
    console.log('asdf')
  }

    useEffect(() => {

          async function setup() {

            const result = await db.getAllAsync('SELECT * FROM hobbits');
            hobbits = [];
            for ( r of result ) {
               let data =  {
                    "name": r.name,
                    "actor": r.actor,
                    "bestFriend": r.bestFriend,
                    "bestLine" : r.bestLine,
                    "imageIndex": r.imageIndex,
                    "imageURL": "STRINGGSSS"
               }

               hobbits.push(data);


            }
            setHobbitIndex(2);
//            setHobbit(hobbits[2])
            console.log(hobbits)

          }
          setup();
    }, []);


    if( hobbitIndex == null ) {
        return (
            <Text>Loading</Text>
        )
    }
    return (
     <View style={styles.container1}>
       <Hobbit hobbits={hobbits} image={currentImage} hobbitIndex={hobbitIndex} />
       <Button label={"Hobbit 1"} onPress={handleHobbit1Press} selected={hobbitIndex === 0} />
       <Button label={"Hobbit 2"} onPress={handleHobbit2Press} selected={hobbitIndex === 1} />
       <Button label={"Hobbit 3"} onPress={handleHobbit3Press} selected={hobbitIndex === 2} />
       <StatusBar style="auto" />
     </View>
    );
}






const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
