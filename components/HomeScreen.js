import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AppContext } from '../contexts/AppContext';

const HomeScreen = ({ navigation }) => {
  const { journalEntries, darkMode } = useContext(AppContext); // Get the journalEntries array from the AppContext

  const renderJournalEntry = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('EntryScreen', { entryId: item.id })}
        style={styles.entryContainer}
      >
        <Text style={styles.entryTitle}>{item.title}</Text>
        <Text style={styles.entryDate}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#1c1c1c' : 'white' }]}>
      <FlatList
        data={journalEntries}
        keyExtractor={(item) => item.id}
        renderItem={renderJournalEntry}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('CameraScreen')}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Add Entry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  entryContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  entryDate: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;


// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import { AppContext } from '../contexts/AppContext';


// const HomeScreen = ({ navigation }) => {
//   const { journalEntries, darkMode } = useContext(AppContext); // Get the journalEntries array from the AppContext
//     // { id: '1', title: 'Entry 1', date: '2023-07-19' },
//     // { id: '2', title: 'Entry 2', date: '2023-07-18' },
//     // { id: '3', title: 'Entry 3', date: '2023-07-17' },
//     // Add more entries as needed
//   // ]);


//   const renderJournalEntry = ({ item }) => {
//     return (
//       <TouchableOpacity
//         onPress={() => navigation.navigate('EntryScreen', { entryId: item.id })}
//         style={styles.entryContainer}
//       >
//         <Text style={styles.entryTitle}>{item.title}</Text>
//         <Text style={styles.entryDate}>{item.date}</Text>
//       </TouchableOpacity>
//     );
//   };


//   return (
//     <View style={[styles.container, { backgroundColor: darkMode ? '#1c1c1c' : 'white' }]}>
//       <FlatList
//         data={journalEntries}
//         keyExtractor={(item) => item.id}
//         renderItem={renderJournalEntry}
//       />
//       <TouchableOpacity
//         onPress={() => navigation.navigate('CameraScreen')}
//         style={styles.addButton}
//       >
//         <Text style={styles.addButtonText}>Add Entry</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   entryContainer: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   entryTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   entryDate: {
//     fontSize: 14,
//     color: '#666',
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


// export default HomeScreen;









