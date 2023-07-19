import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the MaterialCommunityIcons

const EntryScreen = ({ route }) => {
  const navigation = useNavigation();
  const { savedImageUri, entry } = route.params || { entry: { title: '', date: '', location: '', imageUri: '' } };
  const [editedTitle, setEditedTitle] = useState(entry?.title || '');
  const { darkMode, setJournalEntries } = useContext(AppContext); // Add setJournalEntries to update journalEntries

  const handleTitleChange = (text) => {
    setEditedTitle(text);
  };

  useEffect(() => {
    if (savedImageUri) {
      entry.imageUri = savedImageUri;
    }
  }, [savedImageUri]);

  const handleSave = () => {
    // Create a copy of the original entry with the updated title
    const updatedEntry = { ...entry, title: editedTitle };

    // Find the index of the original entry in the journalEntries array
    const entryIndex = journalEntries.findIndex((item) => item.id === entry.id);

    // Create a copy of the journalEntries array and replace the old entry with the updated one
    const updatedEntries = [...journalEntries];
    updatedEntries[entryIndex] = updatedEntry;

    // Update the journalEntries state with the updated array
    setJournalEntries(updatedEntries);

    // Navigate back to the HomeScreen
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: darkMode ? '#1c1c1c' : 'white' }]}>
      <Image source={{ uri: entry?.imageUri || '' }} style={styles.image} />
      <TextInput
        value={editedTitle}
        onChangeText={handleTitleChange}
        placeholder="Entry Title"
        style={[styles.titleInput, { borderColor: darkMode ? '#ccc' : 'black' }]}
      />
      <Text style={[styles.dateText, { color: darkMode ? '#666' : 'black' }]}>{entry?.date || ''}</Text>
      <Text style={[styles.locationText, { color: darkMode ? '#666' : 'black' }]}>{entry?.location || ''}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={[styles.saveButtonText, { color: darkMode ? 'black' : 'white' }]}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

EntryScreen.navigationOptions = ({ navigation }) => ({
  title: 'Entry Details',
  headerRight: () => (
    <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('CameraScreen')}>
      <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
    </TouchableOpacity>
  ),
});

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


// import React, { useState, useEffect, useContext } from 'react';
// import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { AppContext } from '../contexts/AppContext';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the MaterialCommunityIcons

// const EntryScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { savedImageUri, entry } = route.params || {
//     entry: { title: '', date: '', location: '', imageUri: '' },
//   };
//   const [editedTitle, setEditedTitle] = useState(entry.title || '');
//   const { darkMode } = useContext(AppContext);

//   const handleTitleChange = (text) => {
//     setEditedTitle(text);
//   };

//   useEffect(() => {
//     if (savedImageUri) {
//       entry.imageUri = savedImageUri;
//     }
//   }, [savedImageUri]);

//   const handleSave = () => {
//     const updatedEntry = { ...entry, title: editedTitle };
//     navigation.goBack();
//   };

//   return (
//     <ScrollView contentContainerStyle={[styles.container, { backgroundColor: darkMode ? '#1c1c1c' : 'white' }]}>
//       <Image source={{ uri: entry?.imageUri || '' }} style={styles.image} />
//       <TextInput
//         value={editedTitle}
//         onChangeText={handleTitleChange}
//         placeholder="Entry Title"
//         style={[styles.titleInput, { borderColor: darkMode ? '#ccc' : 'black' }]}
//       />
//       <Text style={[styles.dateText, { color: darkMode ? '#666' : 'black' }]}>{entry?.date || ''}</Text>
//       <Text style={[styles.locationText, { color: darkMode ? '#666' : 'black' }]}>{entry?.location || ''}</Text>
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={[styles.saveButtonText, { color: darkMode ? 'black' : 'white' }]}>Save</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// EntryScreen.navigationOptions = ({ navigation }) => ({
//   title: 'Entry Details',
//   headerRight: () => (
//     <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('CameraScreen')}>
//       <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
//     </TouchableOpacity>
//   ),
// });

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//     resizeMode: 'cover',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   titleInput: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: '100%',
//   },
//   dateText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   locationText: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default EntryScreen;










