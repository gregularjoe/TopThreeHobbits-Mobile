import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, selected }) {
  return (
    <View style={[styles.buttonContainer, selected && styles.selectedButtonContainer]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 40,
    marginHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: "#444",
  },
  selectedButtonContainer: {
    backgroundColor: "#006400",
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
