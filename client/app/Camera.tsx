import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { FontAwesome } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { useEffect, useState } from 'react';
import { CameraPreview } from '@/components/CameraPreview';
import { Link } from 'expo-router';
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

  // async function changeScreenOrientation() {
  //   await ScreenOrientation.lockAsync(
  //     ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
  //   );
  // }
  // async function resetScreenOrientation() {
  //   await ScreenOrientation.lockAsync(
  //     ScreenOrientation.OrientationLock.PORTRAIT_UP
  //   );
  // }

  useEffect(() => {
    startCamera();
    // changeScreenOrientation();
    // return () => {
    //   resetScreenOrientation();
    // };
  }, []);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
      }}
    >
      {cameraOpen && (
        <>
          {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} />
          ) : (
            <Camera
              style={{
                width: '100%',
                height: '80%',
                marginVertical: 10,
                marginHorizontal: 10,
              }}
              ref={(r) => {
                camera = r;
              }}
            />
          )}

          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}
            >
              {previewVisible && capturedImage ? (
                <>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setPreviewVisible(false);
                      setCapturedImage(null);
                    }}
                  >
                    <FontAwesome name="times" size={24} color="#fff" />
                  </TouchableOpacity>
                  <Link href="/Configurator/Size" asChild>
                    <TouchableOpacity style={styles.doubleCircle}>
                      <Text>Save</Text>
                    </TouchableOpacity>
                  </Link>
                </>
              ) : (
                <View style={styles.doubleCircle}>
                  <TouchableOpacity
                    style={styles.circleCameraBtn}
                    onPress={takePicture}
                  ></TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  circleCameraBtn: {
    width: 50, // Adjust width and height as needed
    height: 50, // to get desired circle size
    borderRadius: 50,
    borderWidth: 4, // Border width
    borderColor: '#222', // Border color
    borderStyle: 'solid', // Half of the width or height
    backgroundColor: '#fff  ', // Example color, can be any color or gradient\
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  doubleCircle: {
    width: 70, // Adjust width and height as needed
    height: 70, // to get desired circle size
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.5, // For iOS shadow
    shadowRadius: 4, // For iOS shadow
    elevation: 4, // For Android shadow
    opacity: 0.8, // Opacity of the component
  },
});
