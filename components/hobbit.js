import { Image, Text, View, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import { HobbitContext } from './HobbitContext.js';

/**
 * Hobbit component displays information about a specific hobbit.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.hobbits - Array of hobbit objects.
 * @param {number} props.hobbitIndex - Index of the hobbit to display.
 * @param {Object} props.image - Image source for the hobbit.
 * @returns {JSX.Element} The rendered component.
 */
export default function Hobbit(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.hobbits[props.hobbitIndex].name}</Text>
            <Image
                source={props.image}
                style={styles.image}
            />
            <Text style={styles.label}>Portrayed by:</Text>
            <Text style={styles.text}>{props.hobbits[props.hobbitIndex].actor}</Text>
            <Text style={styles.label}>Best Friend:</Text>
            <Text style={styles.text}>{props.hobbits[props.hobbitIndex].bestFriend}</Text>
            <Text style={styles.label}>Memorable Quote:</Text>
            <Text style={styles.quote}>"{props.hobbits[props.hobbitIndex].bestLine}"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4b5320',
        fontFamily: 'serif',
        marginBottom: 10,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 3,
        borderColor: '#4b5320',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        color: '#8b4513',
        fontFamily: 'serif',
        marginTop: 10,
    },
    text: {
        fontSize: 14,
        color: '#4b5320',
        fontFamily: 'serif',
        marginBottom: 5,
    },
    quote: {
        fontSize: 14,
        color: '#8b4513',
        fontStyle: 'italic',
        fontFamily: 'serif',
        marginHorizontal: 20,
        textAlign: 'center',
    },
});
