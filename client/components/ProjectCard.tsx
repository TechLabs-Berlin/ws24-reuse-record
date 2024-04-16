import { Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

const ProjectCard = () => {
  return (
    <Link href="/CatalogList" asChild>
      <Pressable>
        <View style={{ marginBottom: 8, marginTop: 5, borderWidth: 1, borderColor:"#ccc", padding:10 }}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require('../assets/images/window5.jpeg')}
          />
          <Text style={{ textAlign: 'center',  }}>
            Project X{' '}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProjectCard;
