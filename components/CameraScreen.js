import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Device from 'expo-device'; // Import the Device module
import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AppContext } from '../contexts/AppContext'; // Import the AppContext


const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    getCameraPermissions();
    getAudioPermissions();
  }, []);

  const getCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(status === 'granted');
  };

  const getAudioPermissions = async () => {
    const { status } = await Audio.requestMicrophonePermissionsAsync();
    setHasAudioPermission(status === 'granted');
  };

  const handleTakePicture = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync();
        console.log('Photo taken:', photo.uri);
      } catch (error) {
        console.log('Error taking photo:', error.message);
      }
    }
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>Camera and audio permissions are required to use this feature.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={(ref) => setCameraRef(ref)}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
      />
      <View style={{ flex: 0.1, alignItems: 'center' }}>
        <TouchableOpacity onPress={handleTakePicture} style={{ backgroundColor: 'blue', padding: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default CameraScreen;








