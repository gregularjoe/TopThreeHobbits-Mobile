import { Text, Pressable, View, TextInput, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Button from '../components/button';
import { HobbitContext } from '../components/HobbitContext';
import { useContext, useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { Button as PaperButton } from 'react-native-paper';
import { Picker as SelectPicker } from '@react-native-picker/picker';

/**
 * Page component that displays a form to update hobbit information.
 * It includes text inputs for hobbit details and a picker for hobbit rank.
 *
 * @returns {JSX.Element} The form to update hobbit information.
 */
export default function Page() {
  const { hobbit, setHobbit } = useContext(HobbitContext);
  const [hobbitName, setHobbitName] = useState(hobbit.name);
  const [hobbitActor, setHobbitActor] = useState(hobbit.actor);
  const [hobbitBestFriend, setHobbitBestFriend] = useState(hobbit.bestFriend);
  const [hobbitBestLine, setHobbitBestLine] = useState(hobbit.bestLine);
  const [hobbitRank, setHobbitRank] = useState(hobbit.rank);
  const [hobbitImageIndex, setHobbitImageIndex] = useState(hobbit.imageIndex);
  const db = useSQLiteContext();

  /**
   * Updates the hobbit information in the database.
   */
  const updateHobbitInfo = async () => {
    const imgIndex = parseInt(hobbitRank) - 1;

    const latestData = {
      "name": hobbitName,
      "actor": hobbitActor,
      "bestFriend": hobbitBestFriend,
      "bestLine": hobbitBestLine,
      "imageIndex": imgIndex,
    };
    await db.runAsync('UPDATE hobbits SET name = ?, actor = ?, bestFriend = ?, bestLine = ? WHERE imageIndex = ' + imgIndex + ';',
      [hobbitName, hobbitActor, hobbitBestFriend, hobbitBestLine, imgIndex]);

    const updatedHobbit = await db.getAllAsync('SELECT * FROM hobbits where imageIndex = ' + imgIndex);
    setHobbit(updatedHobbit);
  };

  /**
   * Updates the hobbit image index.
   *
   * @param {string} text - The new image index value.
   */
  const updateHobbitImageIndex = (text) => {
    setDisplayImageIndexValue(text);
    if (!isNaN(text) && text !== "") {
      setDisplayImageIndexValue(parseInt(text));
    }
  };

  return (
    <View style={styles.formContainer}>
      <PaperTextInput
        label='Hobbit Name'
        style={styles.input}
        onChangeText={setHobbitName}
        value={hobbitName}
      />

      <PaperTextInput
        label='Actor'
        style={styles.input}
        onChangeText={setHobbitActor}
        value={hobbitActor}
      />

      <PaperTextInput
        label='Best Friend'
        style={styles.input}
        onChangeText={setHobbitBestFriend}
        value={hobbitBestFriend}
      />

      <PaperTextInput
        label='Best Line'
        style={styles.input}
        onChangeText={setHobbitBestLine}
        value={hobbitBestLine}
      />

      <SelectPicker
        selectedValue={hobbitRank}
        onValueChange={(itemValue) => setHobbitRank(itemValue)}
        style={styles.picker}
      >
        <SelectPicker.Item label="Select Rank" value="" />
        <SelectPicker.Item label="1st" value={1} />
        <SelectPicker.Item label="2nd" value={2} />
        <SelectPicker.Item label="3rd" value={3} />
      </SelectPicker>

      <PaperButton
        style={styles.paperButton}
        mode="contained"
        onPress={updateHobbitInfo}
      >
        Submit
      </PaperButton>
    </View>
  );
}

/**
 * Styles for the Page component.
 */
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: "#F4F7E9",
    height: 20,
    width: 250,
    margin: 5,
    marginTop: 10,
    paddingTop: 3,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  picker: {
    width: 250,
    height: 50,
    marginTop: 5,
    backgroundColor: '#F4F7E9',
  },
  paperButton: {
    margin: 5,
    backgroundColor: '#556b2f',
  },
});
