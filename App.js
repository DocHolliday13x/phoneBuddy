import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'; // Import the HomeScreen component
import CameraScreen from './components/CameraScreen'; // Import the CameraScreen component
import EntryScreen from './components/EntryScreen'; // Import the EntryScreen component


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'PhoneBuddy' }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Camera' }} />
        <Stack.Screen name="EntryScreen" component={EntryScreen} options={{ title: 'Entry Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

