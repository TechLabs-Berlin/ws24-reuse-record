import { ImageBackground, View } from 'react-native';

interface Props {
    photo?: { uri: string }; // Define the type of the photo prop
  }


const CameraPreview: React.FC<Props> = ({ photo })=> {
  return (
    <View style={{backgroundColor:"transparent", width: "100%", height:"80%"}}>
      <ImageBackground
        style={{flex:1}}
        source={{ uri: photo && photo.uri }}
      />
    </View>
  );
}
export { CameraPreview };