import {
  Pressable,
  ScrollView,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import CatalogItem from '@/components/CatalogItem';
import { Link } from 'expo-router';
import { Text } from '@/components/Themed';
import { AntDesign } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

const CatalogList = () => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            paddingHorizontal: 10,
          }}
        >
          <TextInput
            style={{
              borderColor: '#ddd',
              borderWidth: 1,
              padding: 10,
              paddingLeft: 20,
              borderRadius: 30,
              marginTop: 8,
              marginBottom: 8,
            }}
            placeholder="search"
          />
          <CatalogItem
            title="3X2"
            img={require('../assets/images/WindowPreview.png')}
            size="100cm x 200cm"
            material={'frame material'}
            feature={'feature'}
          />
          <CatalogItem
            title="Hello"
            img={require('../assets/images/WindowPreview.png')}
            size="Frame size"
            material={'frame material'}
            feature={'feature'}
          />
          <CatalogItem
            title="Hello"
            img={require('../assets/images/WindowPreview.png')}
            size="Frame size"
            material={'frame material'}
            feature={'feature'}
          />

          <CatalogItem
            title="Hello"
            img={require('../assets/images/WindowPreview.png')}
            size="Frame size"
            material={'frame material'}
            feature={'feature'}
          />
          <CatalogItem
            title="Hello"
            img={require('../assets/images/WindowPreview.png')}
            size="Frame size"
            material={'frame material'}
            feature={'feature'}
          />
          <CatalogItem
            title="Hello"
            img={require('../assets/images/WindowPreview.png')}
            size="Frame size"
            material={'frame material'}
            feature={'feature'}
          />

          <CatalogItem
            title="Hello"
            img={require('../assets/images/WindowPreview.png')}
            size="Frame size"
            material={'frame material'}
            feature={'feature'}
          />
        </View>
      </ScrollView>
      <Link href="/Camera" asChild>
        <Pressable
          style={{
            ...styles.buttonAdd,

            shadowColor: '#555', // For iOS shadow
            shadowOffset: { width: 0, height: 2 }, // For iOS shadow
            shadowOpacity: 1, // For iOS shadow
            shadowRadius: 4, // For iOS shadow
            elevation: 6, // For Android shadow
            opacity: 0.9,
          }}
        >
          <AntDesign name="plus" size={30} color="#ccc" />
        </Pressable>
      </Link>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdd: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,

    borderRadius: 50,
    backgroundColor: '#007bff',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default CatalogList;
