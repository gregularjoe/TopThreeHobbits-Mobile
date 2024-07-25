import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hobbit from './components/hobbit.js';
import Button from './components/button.js';

import hobbits from './assets/hobbits.json';

const samwiseImage = require('./assets/samwise.jpg');
const bilboImage = require('./assets/bilbo.jpg');
const frodoImage = require('./assets/frodo.jpg');

export default function App() {
  const [hobbitIndex, setHobbitIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(samwiseImage);

  const handleHobbit1Press = () => {
    setHobbitIndex(0);
    setCurrentImage(samwiseImage);
  }

  const handleHobbit2Press = () => {
    setHobbitIndex(1);
    setCurrentImage(bilboImage);
  }

  const handleHobbit3Press = () => {
    setHobbitIndex(2);
    setCurrentImage(frodoImage);
  }

  const handleTopThree = () => {
    console.log("Top Three BTN clicked")
  }

    const handleEdit = () => {
      console.log("Edit BTN clicked")
    }

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
          <Button label={"TopThree"} onPress={handleTopThree}/>
          <Button label={"Edit"} onPress={handleEdit}/>
      </View>

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
