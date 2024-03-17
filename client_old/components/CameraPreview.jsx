import { ImageBackground, View } from 'react-native';

function CameraPreview({ photo }) {
  return (
    <View className="bg-transparent flex-1 w-full h-60">
      <ImageBackground
        className="flex-1"
        source={{ uri: photo && photo.uri }}
      />
    </View>
  );
}
export { CameraPreview };
