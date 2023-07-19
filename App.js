import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './contexts/AppContext';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import EntryScreen from './components/EntryScreen';

const Stack = createStackNavigator();

const App = () => {
  const { colors, dark, toggleTheme } = useTheme();

  return (
    <AppProvider>
      <NavigationContainer theme={{ colors: { ...colors, primary: '#2196F3' } }}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'PhoneBuddy' }} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Camera' }} />
          <Stack.Screen
            name="EntryScreen"
            component={EntryScreen}
            options={{
              title: 'Entry Details',
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }} onPress={toggleTheme}>
                  <MaterialCommunityIcons
                    name={dark ? 'white-balance-sunny' : 'moon-waning-crescent'}
                    size={24}
                    color={colors.text}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;




// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AppProvider } from './contexts/AppContext';
// import { useTheme } from 'react-native-paper'; // Import the useTheme hook
// import { MaterialCommunityIcons } from '@expo/vector-icons';


// import HomeScreen from './components/HomeScreen'; // Import the HomeScreen component
// import CameraScreen from './components/CameraScreen'; // Import the CameraScreen component
// import EntryScreen from './components/EntryScreen'; // Import the EntryScreen component


// const Stack = createStackNavigator();


// const App = () => {

//   const { colors, dark, toggleTheme } = useTheme();


//   return (
//     <AppProvider>
//       <NavigationContainer theme={{ colors: { ...colors, primary: '#2196F3' } }}>
//         <Stack.Navigator initialRouteName="HomeScreen">
//           <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'PhoneBuddy' }} />
//           <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Camera' }} />
//           <Stack.Screen
//             name="EntryScreen"
//             component={EntryScreen}
//             options={{
//               title: 'Entry Details',
//               headerRight: () => (
//                 <TouchableOpacity style={{ marginRight: 15 }} onPress={toggleTheme}>
//                   <MaterialCommunityIcons
//                     name={dark ? 'white-balance-sunny' : 'moon-waning-crescent'}
//                     size={24}
//                     color={colors.text}
//                   />
//                 </TouchableOpacity>
//               ),
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AppProvider>
//   );
// };


// export default App;

