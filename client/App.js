import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import { Camera } from "expo-camera";
import { useState } from "react";

export default function App() {
  const [cameraOpen, setCameraOpen] = useState(false);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setCameraOpen(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  return (
    <View className="my-auto px-10">
      {cameraOpen ? (
        <>
          <Camera
            className="block w-full h-[80%]"
            ref={(r) => {
              camera = r;
            }}
          ></Camera>
          <Button title="Click!" color="#ac4" />
        </>
      ) : (
        <>
          <Button title="Open Camera" color="#ac4" onPress={__startCamera} />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
