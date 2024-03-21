import { ImageBackground, View } from 'react-native';

function CameraPreview({ photo }) {
  return (
    <View style={{backgroundColor:"transparent", flex:1, width:"100%", height:"80%"}}>
      <ImageBackground
        style={{flex:1}}
        source={{ uri: photo && photo.uri }}
      />
    </View>
  );
}
export { CameraPreview };