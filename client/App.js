import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import {Camera} from 'expo-camera'
const [startCamera, setStartCamera] = React.useState(false);


const __startCamera = async () => {
  const {status} = await Camera.requestPermissionsAsync()
if(status === 'granted'){
 // do something
  // start the camera
  setStartCamera(true)

}else{
 Alert.alert("Access denied")
}

export default function App() {
  return (
    <View className="my-auto px-10">
      <Text className="text-3xl bold mb-5">Login</Text>
      <Text className="">Username:</Text>
      <TextInput className=" border p-2" placeholder="Enter your username" />
      <Text>Password:</Text>
      <TextInput
        className="mb-5 border p-2"
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Take a picture " color="#ac4" />
      <Camera></Camera>
      <StatusBar style="auto" />
    </View>
  );
}
