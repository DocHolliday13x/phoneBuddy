import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';


const EntryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { savedImageUri, entry } = route.params;
  const [editedTitle, setEditedTitle] = useState(entry.title);

  const handleTitleChange = (text) => {
    setEditedTitle(text);
  };

  useEffect(() => {
    if (savedImageUri) {
      entry.imageUri = savedImageUri;
    }
  }, [savedImageUri]);

  const handleSave = () => {
    entry.title = editedTitle;
    navigation.goBack();
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: entry.imageUri }} style={styles.image} />
      <TextInput
        value={editedTitle}
        onChangeText={handleTitleChange}
        placeholder="Entry Title"
        style={styles.titleInput}
      />
      <Text style={styles.dateText}>{entry.date}</Text>
      <Text style={styles.locationText}>{entry.location}</Text>
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







