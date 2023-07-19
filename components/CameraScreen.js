import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { format } from 'date-fns'; // We'll use this to format the date


const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      // Check camera permissions
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      // Check location permissions
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== 'granted') {
        alert('Location permission is required to capture photos.');
      }
    })();
  }, []);

  useEffect(() => {
    // Fetch the current location when the component mounts
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    } catch (error) {
      console.log('Error fetching location: ', error);
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo);
    }
  };

  const saveEntry = () => {
    if (capturedImage) {
      // Create a new journal entry object with image URI, date, and location
      const newEntry = {
        id: Date.now().toString(), // A unique ID for the entry
        imageUri: capturedImage.uri,
        date: format(new Date(), 'yyyy-MM-dd'), // Format the date as 'YYYY-MM-DD'
        location: location
          ? `Lat: ${location.latitude.toFixed(6)}, Long: ${location.longitude.toFixed(6)}`
          : 'Location not available',
      };

      // Logic to save the new journal entry in your state management or any data storage
      // For now, we'll just navigate to the EntryScreen without saving the entry.
      navigation.navigate('EntryScreen', { entry: newEntry });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      {capturedImage ? (
        <Image source={{ uri: capturedImage.uri }} style={styles.capturedImage} />
      ) : (
        <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)} type={Camera.Constants.Type.back} />
      )}
      {!capturedImage && (
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Text style={styles.captureButtonText}>Capture</Text>
        </TouchableOpacity>
      )}
      {capturedImage && (
        <TouchableOpacity style={styles.saveButton} onPress={saveEntry}>
          <Text style={styles.saveButtonText}>Save Entry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  capturedImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  captureButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: 'green',
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


export default CameraScreen;








