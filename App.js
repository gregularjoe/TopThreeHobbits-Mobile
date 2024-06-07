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

console.log(hobbits)
  return (
    <View style={styles.container}>

      <Hobbit hobbits={hobbits} image={currentImage}  hobbitIndex={hobbitIndex} />
      <Button label={"Hobbit 1"} onPress={handleHobbit1Press}/>
      <Button label={"Hobbit 2"} onPress={handleHobbit2Press}/>
      <Button label={"Hobbit 3"} onPress={handleHobbit3Press}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});