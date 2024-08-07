import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button as PaperButton } from 'react-native-paper';

export default function NavBar() {
    const [activeButton, setActiveButton] = useState('home');

    const handleHome = () => {
        setActiveButton('home');
        router.navigate('/');
    }

    const handleUpdate = () => {
        setActiveButton('update');
        router.navigate('/update');
    }

    return (
        <View style={styles.navContainer}>
            <PaperButton
                mode="contained"
                style={activeButton === 'home' ? styles.activeButton : styles.inactiveButton}
                labelStyle={activeButton === 'home' ? styles.activeButtonText : styles.inactiveButtonText}
                onPress={handleHome}
            >
                Top Three
            </PaperButton>
            <PaperButton
                mode="contained"
                style={activeButton === 'update' ? styles.activeButton : styles.inactiveButton}
                labelStyle={activeButton === 'update' ? styles.activeButtonText : styles.inactiveButtonText}
                onPress={handleUpdate}
            >
                Update
            </PaperButton>
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 450,
    },
    activeButton: {
        height: 45,
        width: '50%',
        borderRadius: 0,
        backgroundColor: '#D4AF37', // Yellow color for active button
        elevation: 10, // Remove shadow to make it appear sunken
        borderBottomWidth: 4,
        borderBottomColor: '#bc8f8f', // Darker shade for 3D effect
    },
    inactiveButton: {
        height: 45,
        width: '50%',
        borderRadius: 0,
        backgroundColor: '#556b2f', // Green color for inactive button
        elevation: 0, // Add shadow to make it appear raised
    },
    activeButtonText: {
        color: '#000000', // Black text color for active button
    },
    inactiveButtonText: {
        color: '#ffffff', // White text color for inactive button
    },
});
