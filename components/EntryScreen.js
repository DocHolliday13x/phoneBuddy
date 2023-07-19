import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as Location from 'expo-location';


const EntryScreen = ({ route, navigation }) => {
  const { entryId } = route.params;
  const [entry, setEntry] = useState({
    id: entryId,
    title: 'Entry 1', // Replace with actual title fetched from state management
    date: '2023-07-19', // Replace with actual date fetched from state management
    imageUri: null, // Replace with actual image URI fetched from state management
    location: null, // Replace with actual location fetched from state management
  });

  useEffect(() => {
    // You can implement logic here to fetch the entry details based on the entryId
    // and update the 'entry' state with the actual data.
    // For this example, we'll use static data.
    // Replace the static data below with the actual data you fetch from state management.
    const fetchEntryDetails = async () => {
      // Simulating fetching data with a delay (replace this with actual fetching logic)
      const fetchedEntry = await fetchDataFromStateManagement(entryId);
      setEntry(fetchedEntry);
    };

    fetchEntryDetails();
  }, [entryId]);

  const handleTitleChange = (newTitle) => {
    setEntry({ ...entry, title: newTitle });
  };

  const handleSave = () => {
    // Implement logic to save the updated entry details to state management
    // After saving, navigate back to HomeScreen
    navigation.navigate('HomeScreen');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {entry.imageUri && <Image source={{ uri: entry.imageUri }} style={styles.image} />}
      <TextInput
        value={entry.title}
        onChangeText={handleTitleChange}
        placeholder="Entry Title"
        style={styles.titleInput}
      />
      <Text style={styles.dateText}>{entry.date}</Text>
      <Text style={styles.locationText}>{entry.location ? entry.location : 'Location not available'}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 20,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default EntryScreen;









