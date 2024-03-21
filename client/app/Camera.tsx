
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, View } from 'react-native';
import { Camera } from 'expo-camera';
import { useState } from 'react';
// import { CameraPreview } from './components/CameraPreview';

let camera: any;

export default function App() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setCameraOpen(true);
    } else {
      Alert.alert('Access denied');
    }
  };

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10}}>
      {cameraOpen ? (
        <>
          <Camera
           style={{width: '100%', height: '80%' }}
            ref={(r) => {
              camera = r;
            }}
          />
          <Button title="Click!" color="#ac4" onPress={takePicture} />
          {/* {previewVisible && capturedImage && (
            // <CameraPreview photo={capturedImage} />
          )} */}
        </>
      ) : (
        <Button title="Open Camera" color="#ac4" onPress={startCamera} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}