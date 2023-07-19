import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the MaterialCommunityIcons

const EntryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { savedImageUri, entry } = route.params;
  const [editedTitle, setEditedTitle] = useState(entry.title);
  const { darkMode } = useContext(AppContext); // Get the darkMode state from the AppContext

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
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: darkMode ? '#1c1c1c' : 'white' }]}>
      <Image source={{ uri: entry.imageUri }} style={styles.image} />
      <TextInput
        value={editedTitle}
        onChangeText={handleTitleChange}
        placeholder="Entry Title"
        style={[styles.titleInput, { borderColor: darkMode ? '#ccc' : 'black' }]}
      />
      <Text style={[styles.dateText, { color: darkMode ? '#666' : 'black' }]}>{entry.date}</Text>
      <Text style={[styles.locationText, { color: darkMode ? '#666' : 'black' }]}>{entry.location}</Text>
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
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { AppContext } from '../contexts/AppContext';


// const EntryScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { savedImageUri, entry } = route.params;
//   const [editedTitle, setEditedTitle] = useState(entry.title);

//   const handleTitleChange = (text) => {
//     setEditedTitle(text);
//   };

//   useEffect(() => {
//     if (savedImageUri) {
//       entry.imageUri = savedImageUri;
//     }
//   }, [savedImageUri]);

//   const handleSave = () => {
//     entry.title = editedTitle;
//     navigation.goBack();
//   };


//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image source={{ uri: entry.imageUri }} style={styles.image} />
//       <TextInput
//         value={editedTitle}
//         onChangeText={handleTitleChange}
//         placeholder="Entry Title"
//         style={styles.titleInput}
//       />
//       <Text style={styles.dateText}>{entry.date}</Text>
//       <Text style={styles.locationText}>{entry.location}</Text>
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.saveButtonText}>Save</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };


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







