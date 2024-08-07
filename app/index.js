import {useContext, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useSQLiteContext } from 'expo-sqlite';
import { Button as PaperButton } from 'react-native-paper';
import Navbar from '../components/navBar.js';
import Hobbit from '../components/hobbit.js';
import Button from '../components/button.js';
import HobbitContext from '../components/HobbitContext.js';

const firstHobbitImage = require('../assets/samwise.jpg');
const secondHobbitImage = require('../assets/bilbo.jpg');
const thirdHobbitImage = require('../assets/frodo.jpg');
const imageArray = [firstHobbitImage,secondHobbitImage,thirdHobbitImage];

let hobbits = [];

export default function App() {
  const db = useSQLiteContext();
  const [hobbitIndex, setHobbitIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(thirdHobbitImage);
  const [activeButton, setActiveButton] = useState(2); // Start with the third hobbit as active

  const handleHobbit1Press = () => {
    setHobbitIndex(0);
    setCurrentImage(firstHobbitImage);
    setActiveButton(0);
  }

  const handleHobbit2Press = () => {
    setHobbitIndex(1);
    setCurrentImage(secondHobbitImage);
    setActiveButton(1);
  }

  const handleHobbit3Press = () => {
    setHobbitIndex(2);
    setCurrentImage(thirdHobbitImage);
    setActiveButton(2);
  }

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync('SELECT * FROM hobbits');
      hobbits = [];
      for (let r of result) {
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
      setHobbitIndex(2); // Start with the third hobbit
    }
    setup();
  }, []);

  if (hobbitIndex == null || !hobbits[hobbitIndex]) {
    return (
      <Text>Loading</Text>
    );
  }

  return (
    <View style={styles.container1}>
      <View style={styles.hobbitContainer}>
        <Hobbit hobbits={hobbits} image={currentImage} hobbitIndex={hobbitIndex} />
      </View>
      <View style={styles.buttonContainer}>
          <PaperButton
                style={activeButton === 0 ? styles.activeButton : styles.PaperButton}
                labelStyle={activeButton === 0 ? styles.activeButtonText : styles.buttonText}
                mode="contained"
                onPress={handleHobbit1Press}
              >
                #1 Hobbit
              </PaperButton>
              <PaperButton
                style={activeButton === 1 ? styles.activeButton : styles.PaperButton}
                labelStyle={activeButton === 1 ? styles.activeButtonText : styles.buttonText}
                mode="contained"
                onPress={handleHobbit2Press}
              >
                #2 Hobbit
              </PaperButton>
              <PaperButton
                style={activeButton === 2 ? styles.activeButton : styles.PaperButton}
                labelStyle={activeButton === 2 ? styles.activeButtonText : styles.buttonText}
                mode="contained"
                onPress={handleHobbit3Press}
              >
                #3 Hobbit
              </PaperButton>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height: 50, // Adjust the height to fit the buttons
  },
  hobbitContainer: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 110,
    marginTop: 20,
    marginBottom: 100,
  },
  PaperButton: {
    margin: 5,
    backgroundColor: '#556b2f', // Default button color
  },
  activeButton: {
    margin: 2,
    backgroundColor: '#D4AF37', // Active button color
  },
  buttonText: {
    color: '#ffffff', // Default text color
  },
  activeButtonText: {
    color: '#000000', // Active button text color
  },
});
